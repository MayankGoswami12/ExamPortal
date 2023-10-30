import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;

 public loginStatusSubject = new Subject<boolean>(); 

  constructor(private http:HttpClient) { }


  public getCurrentUser(){

    return this.http.get(`${baseUrl}/current-user`)
  }

  public generateToken(loginData:any){

   return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  public LoginUser(token: any){
    localStorage.setItem('token',token);
    
    return true;
  }


  public isLoggedIn(){

    let tokenStr = localStorage.getItem("token");

    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){

      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    return true;
  }

  public getToken(){
   return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){

    let userStr = localStorage.getItem('user');
    if(userStr!=null){

      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
