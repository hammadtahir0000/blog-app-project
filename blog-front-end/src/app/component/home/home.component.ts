import { Component, inject } from '@angular/core';


import { BlogService } from '../../blog.service';
import { Blog } from '../../types/blog';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogCardComponent ,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  blogService = inject(BlogService);
  featuredBlogs!: Blog[];

  ngOnInit() {
    this.blogService.getFeaturedBlog().subscribe((result) => {
      this.featuredBlogs = result;
      console.log(this.featuredBlogs);
    });
  }
}
