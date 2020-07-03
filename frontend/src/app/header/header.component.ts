import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../services/routes.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href: string;
  name = '';
  email = '';
  constructor(private route: ActivatedRoute, private router: Router, public routes: RoutesService, public auth: AuthService) {
    this.name = this.auth.getLogin().user.name;
    this.email = this.auth.getLogin().user.email;
  }

  ngOnInit(): void {
  }
  onLogout(){
  }

  isActive() {
    this.href = this.router.url;
  }

  onLogin(){
    this.router.navigate(['/']);
  }
  onRegister(){
    this.router.navigate(['/']);
  }
}
