using System.ComponentModel.DataAnnotations.Schema;

namespace Blog_backend.Entity
{
    [Table("Blogs")]
     
    public class Blog
    {
        public int Id { get; set; }
        public string Tital { get; set; }
        public string Decripation { get; set; }

        public string Contant { get; set; }


        public string Image { get; set; }
        public bool IsFeatured { get; set; }
        public int CategoryId { get; set; }

        public Category? Category { get; set; }
    }
}
