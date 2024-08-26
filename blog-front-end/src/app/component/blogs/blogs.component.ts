import { Component, inject } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Blog } from '../../types/blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  allblog!:Blog[];
  blogservice=inject(BlogService)
  ngOnInit(){
    this.blogservice.gettallBlog().subscribe(result=>{
      this.allblog=result;
    })

  }
}
