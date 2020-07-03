import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // loggedInStatus= JSON.parse(localStorage.getItem('loggedIn')|| 'false')
  constructor(private http:HttpClient){}

  private baseUrl="http://localhost:3000/";
  registerUser(user){
    //this.loggedInStatus=true;
    //localStorage.setItem('loggedIn','true')
    const url = `${this.baseUrl}auth/register`;
    return this.http.post<any>(url,user);
  }

  loginUser(user){
    //this.loggedInStatus=true;
    //localStorage.setItem('loggedIn','true')
    const url = `${this.baseUrl}auth/login`;
    return this.http.post<any>(url,user);
  }
}
