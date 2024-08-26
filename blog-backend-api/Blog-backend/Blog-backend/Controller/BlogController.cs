using Blog_backend.Data;
using Blog_backend.Dto;
using Blog_backend.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace Blog_backend.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IRepository<Blog> _blogepository;

        public BlogController(IRepository<Blog> blogepository)
        {
            _blogepository = blogepository;
        }


        [HttpGet]
        public async Task<ActionResult> GetBlogList()
        {
            var blog =await _blogepository.GetAll();
            return Ok(blog);
        }



        [HttpGet ("{id}")]
        public async Task<ActionResult> GetBlog([FromRoute]int id)
        {
            var blog =await _blogepository.GetById(id);
            return Ok(blog);
        }



        [Authorize]
        [HttpPost]
        public async Task<ActionResult> AddBlog([FromBody] BlogDto model)
        {
            var blog = new Blog()
            {
                CategoryId = model.CategoryId,
                IsFeatured = model.IsFeatured,
                Contant = model.Contant,
                Tital = model.Tital,
                Decripation = model.Decripation,
                Image = model.Image,


            };
           await _blogepository.AddAsync(blog);
            await _blogepository.SaveChangesAsync();
            return Ok(model);

        }



        [Authorize]
        [HttpPut ("{id}")]
        public async Task<ActionResult>UpdateBlog ([FromRoute] int id, [FromBody] BlogDto model)
        {
            var blog = await _blogepository.GetById(id);
            blog.Decripation = model.Decripation;
            blog.Tital = model.Tital;
            blog.Contant = model.Contant;
            blog.IsFeatured = model.IsFeatured;
            blog.Image = model.Image;

            _blogepository.Update(blog);
            await _blogepository.SaveChangesAsync();    
            return Ok(model);
        }


        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBlog([FromRoute] int id)
        {
            await _blogepository.DeleteAsync(id);
            await _blogepository.SaveChangesAsync();


            return Ok();
        }
        [HttpGet("featured")]
        public async Task<ActionResult> GetBlogsFeatureList( )
        {
            var blog = await _blogepository.GetAll(x => x.IsFeatured == true);
            return Ok(blog);
        }

    }
}
