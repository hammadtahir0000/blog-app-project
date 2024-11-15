import { Component, inject, Input } from '@angular/core';
import { Blog } from '../../types/blog';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CategoryService } from '../../category.service';
import { category } from '../../types/category';
@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink],
  templateUrl: './blog-card.component.html',                        
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
@Input()blog!:Blog;
categoryServce=inject(CategoryService);
categoryList:category[]=[]
ngOnInit(){
  this.categoryServce.getCategoryList().subscribe((result)=>{
    this.categoryList=result;
  })
}
getCategoryName(){
  return this.categoryList.find(x=>x.id==this.blog?.categoryId)?.name                                               
}
}
