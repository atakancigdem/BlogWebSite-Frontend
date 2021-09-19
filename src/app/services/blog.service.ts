import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Blog } from '../models/blog';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  constructor(private httpClient : HttpClient) { }

  getBlogs():Observable<ListResponseModel<Blog>>{
    let newPath = environment.apiUrl + "Blogs/detail"
    return this.httpClient.get<ListResponseModel<Blog>>(newPath);
  }

  getBlogDetail(blogId:number):Observable<ListResponseModel<Blog>>{
    let newPath = environment.apiUrl + 'Blogs/detail?blogId='+blogId
    return this.httpClient.get<ListResponseModel<Blog>>(newPath)
  }

  add(blog:Blog):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"Blogs/add",blog)
  }

  getBlogsByTagId(tagId:number):Observable<ListResponseModel<Blog>>{
    let newPath =environment.apiUrl+"Blogs/Blogs/tagid?tagId="+tagId;
    return this.httpClient.get<ListResponseModel<Blog>>(newPath);
  }
}
