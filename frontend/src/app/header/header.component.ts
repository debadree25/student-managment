import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href:string;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.href=this.router.url;
    console.log(this.href)
    
  }

  isActive(){
    this.href=this.router.url;
  }
}
