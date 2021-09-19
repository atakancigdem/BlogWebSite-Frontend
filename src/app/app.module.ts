import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {ToastrModule} from "ngx-toastr";
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from './components/tag/tag.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BlogComponent,
    FooterComponent,
    LoginComponent,
    BlogAddComponent,
    VatAddedPipe,
    RegisterComponent,
    UserComponent,
    BlogDetailComponent,
    HeroeComponent,
    TagComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
