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

  login=true;
  register=false;
  constructor(public route:RoutesService,
    private auth:AuthService,
    public router:Router) { }

  ngOnInit(): void {
  }
  Login(f:NgForm){
    this.login=true;
    const value=f.value;
    this.auth.loginUser(value).subscribe(
      (res)=>{
        console.log(res.data)
        
        // localStorage.setItem('loggedIn','true')
        // localStorage.setItem('loggedUser',JSON.stringify(res.data));
        // //console.log(localStorage.getItem('loggedUser'))
      },
      (err)=>{
        console.log(err);
      }

    )
    this.router.navigate(['/dashboard'])
    
  }
  Register(f:NgForm){
    this.register=true;
    const value=f.value;
    //console.log(value)
   //console.log("nav")
    this.auth.registerUser(value).subscribe(
      (res)=>{
        console.log(res.data)
        
        localStorage.setItem('loggedIn','true')
        localStorage.setItem('loggedUser',JSON.stringify(res.data));
        //console.log(localStorage.getItem('loggedUser'))
      },
      (err)=>{
        console.log(err);
      }

    )
    this.router.navigate(['/dashboard'])
  }

  LogToReg(){
    this.register=true;
    this.login=false;
    this.router.navigate(['/register'])
  }

  RegToLog(){
    this.register=false;
    this.login=true;
    this.router.navigate(['/'])
  }

}
