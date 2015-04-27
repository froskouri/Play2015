using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Relational.Migrations.Infrastructure;
using Play.Models;
using System;

namespace Play.Migrations
{
    [ContextType(typeof(Play.Models.SongsAppContext))]
    public class SongsAppContextModelSnapshot : ModelSnapshot
    {
        public override IModel Model
        {
            get
            {
                var builder = new BasicModelBuilder();
                
                builder.Entity("Play.Models.Song", b =>
                    {
                        b.Property<string>("Artist");
                        b.Property<Guid>("Id")
                            .GenerateValueOnAdd();
                        b.Property<string>("Name");
                        b.Key("Id");
                    });
                
                return builder.Model;
            }
        }
    }
}