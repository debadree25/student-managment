import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Login } from '../models/auth.model';
import { ServerResponse } from '../models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: Login;
  constructor(private http: HttpClient) {
    if (localStorage.getItem('LOGIN')) {
      this.login = JSON.parse(localStorage.getItem('LOGIN'));
    }
  }

  private baseUrl = 'http://localhost:3000/';
  public registerUser(user: User): Promise<ServerResponse<User>> {
    const url = `${this.baseUrl}auth/register`;
    return this.http.post<ServerResponse<User>>(url, user).toPromise();
  }

  public loginUser(email: string, password: string): Promise<ServerResponse<Login>> {
    const url = `${this.baseUrl}auth/login`;
    return this.http.post<ServerResponse<Login>>(url, { email, password }).toPromise();
  }

  public storeLogin(log: Login) {
    this.login = log;
    localStorage.setItem('LOGIN', JSON.stringify(this.login));
  }

  public getLogin(): Login {
    return this.login;
  }
}
