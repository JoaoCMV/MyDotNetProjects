using GameShop_API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace GameShop_API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Game> Games { get; set; }

        public DbSet<Company> Companies { get; set; }
    }
}
