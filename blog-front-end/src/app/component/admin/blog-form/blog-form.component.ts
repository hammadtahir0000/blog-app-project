import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../../../category.service';
import { category } from '../../../types/category';
import { BlogService } from '../../../blog.service';
import { Blog } from '../../../types/blog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss',
})
export class BlogFormComponent {
  categoryService = inject(CategoryService);
  categoryList: category[] = [];
blogService=inject(BlogService);
router=inject(Router)
route=inject(ActivatedRoute)
isEdit=false;
  ngOnInit() {
    
    let id=this.route.snapshot.params['id']
    console.log(id)

    if(id){
      this.isEdit=true;
      this.blogService.getBlogById(+id).subscribe(result=>{
        this.blogForm.patchValue(result as any)
        
      })
    }
    this.categoryService
      .getCategoryList()
      .subscribe((result) => (this.categoryList = result));
  }

  formBuilder = inject(FormBuilder);
  blogForm = this.formBuilder.group({
    id: [null],
    tital: ['', [Validators.required]],
    decripation: [''],
    categoryId: [null, [Validators.required]],
    contant: ['', [Validators.required]],
    image: [''],
    isFeatured: [false],
});

create() {

console.log(this.blogForm.value);
let model:any=this.blogForm.value;
this.blogService.addBlog(model as Blog).subscribe(()=>{
  alert('blog is created sexfully');
  this.router.navigateByUrl("/admin/blogs");
});
  // const model = this.blogForm.value;
  // this.blogService.addBlog(model as unknown as Blog).subscribe({
  //     next: () => {
  //         alert("Blog created successfully");
  //         this.router.navigateByUrl("/admin/blogs");
  //     },
  //     error: (err) => {
  //         console.error("Error creating blog:", err);
  //         alert("Failed to create blog: " + err.message);
  //     }
  // });
} 
update(){
  console.log(this.blogForm.value);
let model:any=this.blogForm.value;
this.blogService.updateBlog(this.blogForm.value.id!,  model as Blog).subscribe(()=>{
  alert('blog is updated sexfully');
  this.router.navigateByUrl("/admin/blogs");
});
 
}
}

