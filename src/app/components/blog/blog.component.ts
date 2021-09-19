import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private blogService:BlogService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["tagId"]){
        this.getBlogsByTagId(params["tagId"]);
      }
      else{
        this.getBlogs();
      }
    })
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(response=>{
      this.blogs = response.data
      this.dataLoaded = true;
    })   
  }

  getBlogsByTagId(tagId:number){
    this.blogService.getBlogsByTagId(tagId).subscribe(response=>{
      this.blogs=response.data
      this.dataLoaded=true;
    }) 
  }

}
