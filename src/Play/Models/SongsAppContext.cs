using System;
using Microsoft.Data.Entity;

namespace Play.Models
{
    public class SongsAppContext : DbContext
    {
		public DbSet<Song> Songs { get; set; }
    }
}