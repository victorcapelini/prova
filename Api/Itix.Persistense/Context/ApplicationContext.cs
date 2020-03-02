using Microsoft.EntityFrameworkCore;
using Itix.Persistence.Entity;

namespace Itix.Persistence.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Consulta>().HasKey(t => t.Id);

        }

        public DbSet<Consulta> Consulta { get; set; }
    }
}
