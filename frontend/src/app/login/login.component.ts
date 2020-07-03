import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = true;
  register = false;
  constructor(public route: RoutesService,
              private auth: AuthService,
              public router: Router) { }

  ngOnInit(): void {
    if (this.auth.getLogin()) {
      this.router.navigate(['dashboard']);
    }
  }

  async loginUser(f: NgForm) {
    const value = f.value;
    console.log(value);
    const { email, password } = value;
    const resp = await this.auth.loginUser(email, password);
    console.log(resp);
    if (resp.status) {
      this.auth.storeLogin(resp.data);
      this.router.navigate(['dashboard']);
    }
  }

  async registerUser(f: NgForm) {
    const value = f.value;
    console.log(value);
    const { name, email, password } = value;
    const resp = await this.auth.registerUser({ name, email, password });
    console.log(resp);
    if (resp.status) {
      this.tab();
    }
  }

  tab() {
    this.login = !this.login;
    this.register = !this.register;
  }
}
