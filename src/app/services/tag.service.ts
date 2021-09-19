import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Tag } from '../models/tag';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private httpClient : HttpClient) { }

  getTags():Observable<ListResponseModel<Tag>>{
    let newPath = environment.apiUrl + "Tags/getall"
    return this.httpClient.get<ListResponseModel<Tag>>(newPath);
  }
}
