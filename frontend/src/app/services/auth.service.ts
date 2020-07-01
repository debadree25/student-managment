import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient){}

  private registerUrl="http://localhost:3000/";
  registerUser(user){
    const url = `${this.registerUrl}auth/register`;
    return this.http.post<any>(url,user);
  }
}
