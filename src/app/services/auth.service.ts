import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.apiUrl+"Auth/login",user)
  }

  register(user:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.apiUrl+"Auth/register",user)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
