using System.ComponentModel.DataAnnotations.Schema;

namespace Blog_backend.Entity
{
    [Table("Users")]
    public class User
    {
        
        public int id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }
}
