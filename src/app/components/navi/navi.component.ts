import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  tags : Tag[];
  filterText = "";

  constructor(private tagService:TagService,
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags() {
    this.tagService.getTags().subscribe(response=>{
      this.tags = response.data
    })   
  }

}
