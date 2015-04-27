using System;

namespace Play.Models
{
    public class Song
    {
		public string Name { get; set; }

		public Guid Id { get; set; }

		public string Artist { get; set; }


		public Song()
		{
			Id = Guid.NewGuid();
		}
	}
}