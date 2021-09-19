import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})

export class BlogAddComponent implements OnInit {

  blogAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private blogService:BlogService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBlogAddForm();
  }

  createBlogAddForm(){
     this.blogAddForm = this.formBuilder.group({
       title:["",Validators.required],
       content: ["",Validators.required],
       createTime:["", Validators.required],
       tagId:["",Validators.required],
       authorId:["",Validators.required]
     })
  }

  add(){
    if(this.blogAddForm.valid){
      let blogModel = Object.assign({},this.blogAddForm.value)
      this.blogService.add(blogModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }

}