// import { Routes } from '@angular/router';
// import { HomeComponent } from './component/home/home.component';
// import { BlogComponent } from './component/blog/blog.component';
// import { BlogsComponent } from './component/blogs/blogs.component';
// import { AboutComponent } from './component/about/about.component';
// import { ManageBlogdComponent } from './component/admin/manage-blogd/manage-blogd.component';
// import { BlogFormComponent } from './component/admin/blog-form/blog-form.component';
// import { LoginComponent } from './component/login/login.component';
// import { authGuard } from './auth.guard';

// export const routes: Routes = [
//     {
//         path: "",
//         component: HomeComponent
//     },
//     {
//         path: "blog/:id",
//         component: BlogComponent
//     },
//     {
//         path: "blogs",
//         component: BlogsComponent
//     },
//     {
//         path: "about",
//         component: AboutComponent
//     },
//     {
//         path: "admin/blogs",
//         component: ManageBlogdComponent,
//         canActivate: [authGuard]
//     },
//     {
//         path: "admin/blog/create",
//         component: BlogFormComponent,
//         canActivate:[authGuard]
//     },
//     {
//         path: "admin/blog/update/:id",
//         component: BlogFormComponent,
//         canActivate:[authGuard]
//     },
//     {
//         path: "login",
//         component: LoginComponent,
    
//     },
// ];


import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { AboutComponent } from './component/about/about.component';
import { ManageBlogdComponent } from './component/admin/manage-blogd/manage-blogd.component';
import { BlogFormComponent } from './component/admin/blog-form/blog-form.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog/:id',
    component: BlogComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin/blogs',
    component: ManageBlogdComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin/blog/create',
    component: BlogFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin/blog/update/:id',
    component: BlogFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
