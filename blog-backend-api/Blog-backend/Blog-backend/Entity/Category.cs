using System.ComponentModel.DataAnnotations.Schema;

namespace Blog_backend.Entity
{
    [Table ("Category")]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
