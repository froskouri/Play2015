using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Data.Entity;
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Play.Models;

namespace Play
{
    public class Startup
    {
		public Startup(IHostingEnvironment env)
		{
			// Setup configuration sources.
			Configuration = new Configuration()
				.AddJsonFile("config.json");
		}

		public IConfiguration Configuration { get; set; }

        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {			
			services.AddEntityFramework(Configuration)
				.AddSqlServer()
				.AddDbContext<SongsAppContext>(options =>
				{
					options.UseSqlServer(Configuration.Get("Data:DefaultConnection:ConnectionString"));
				});

			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app)
        {
			app.UseMvc();			
        }
    }
}
