import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService:TagService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,) { }

  ngOnInit(): void {
    
  }

  getTags() {
    this.tagService.getTags().subscribe(response=>{
      this.tags = response.data
    })   
  }
}
