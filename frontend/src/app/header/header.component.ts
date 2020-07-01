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

    
  }

  isActive() {
    this.href = this.router.url;
  }
}