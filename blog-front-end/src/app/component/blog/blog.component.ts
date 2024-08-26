import { Component, inject } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../types/blog';
import { CategoryService } from '../../category.service';
import { category } from '../../types/category';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  categoryServce = inject(CategoryService);
  blogServce = inject(BlogService);
  router = inject(ActivatedRoute);
  blog!: Blog;
  categoryList:category[]=[]
  ngOnInit() {
    let id = this.router.snapshot.params['id'];
    console.log(id);
    this.blogServce.getBlogById(id).subscribe((result) => {
      this.blog = result;
    });
    this.categoryServce.getCategoryList().subscribe((result)=>{
      this.categoryList=result;
    })
  }
getCategoryName(){
  return this.categoryList.find(x=>x.id==this.blog?.categoryId)?.name                                               
}

}
