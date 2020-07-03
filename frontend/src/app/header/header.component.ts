import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../services/routes.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href: string;
  name:string="";
  email="";
  constructor(private route: ActivatedRoute, private router: Router, public routes: RoutesService) { }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")=="true")
    {
    var user = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(user)
    this.name=user.name
    this.email=user.email;
    // console.log(user.name)
    // console.log(this.name)
    // console.log(user.email)
    }

    
  }
  onLogout(){
    localStorage.setItem("loggedIn",'false')
    this.name=""
    this.email=""
    localStorage.removeItem("loggedUser")
  }

  isActive() {
    this.href = this.router.url;
  }

  onLogin(){
    this.router.navigate(["/"])
  }
  onRegister(){
    this.router.navigate(["/"])
  }
}