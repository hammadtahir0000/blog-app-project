using Blog_backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace Blog_backend.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options):base(options) { }
        public DbSet<Blog> blogs { get; set; }
        public DbSet<Category> categories { get; set; }

        public DbSet<User> Users { get; set; }
    }                                                             
}
