import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:BlogComponent},
  {path:"blogs", component:BlogComponent},
  {path:"blogs/add", component:BlogAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Blogs/detail/:blogId",component:BlogDetailComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
