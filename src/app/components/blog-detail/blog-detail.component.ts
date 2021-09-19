import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  currentBlog : Blog 
  dataLoaded = false;

  constructor(private blogService:BlogService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["blogId"]){
        this.getBlogDetail(params["blogId"])
      }
    })
  }

  getBlogDetail(blogId:number){
    this.blogService.getBlogDetail(blogId).subscribe(response => {
      let items=response.data
      this.currentBlog = items.find(x=>x.blogId==blogId);
      this.dataLoaded=true;
    })
  }


}
