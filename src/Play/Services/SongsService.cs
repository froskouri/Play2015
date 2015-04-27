using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Play.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Play.Services.Controllers
{
    [Route("api/[controller]")]
    public class SongsService : Controller
    {
		public SongsAppContext _dbContext { get; set; }

		public SongsService(SongsAppContext dbContext)
		{
			_dbContext = dbContext;
		}


        // GET: api/values
        [HttpGet]
        public IEnumerable<Song> Get()
        {
			return _dbContext.Songs;
		}

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(string name)
        {
			var song = _dbContext.Songs.FirstOrDefault(m => m.Name == name);
			if (song == null)
			{
				return new HttpNotFoundResult();
			}
			else
			{
				return new ObjectResult(song);
			}
		}

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Song song)
        {
			if (!_dbContext.Songs.Any(n => n.Name.Equals(song.Name)))
			{
				_dbContext.Add(song);
				_dbContext.SaveChanges();
				return new ObjectResult(song);
			}
			else
			{
				var original = _dbContext.Songs.FirstOrDefault(s => s.Name.Equals(song.Name));
				original.Name = song.Name;
				original.Artist = song.Artist;
				_dbContext.SaveChanges();
				return new ObjectResult(original);
			}
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string name)
        {
			var song = _dbContext.Songs.FirstOrDefault(s => s.Name.Equals(name));
			_dbContext.Songs.Remove(song);
			_dbContext.SaveChanges();
			return new HttpStatusCodeResult(200);
		}
    }
}
