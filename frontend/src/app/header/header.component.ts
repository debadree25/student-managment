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
  isLogged = false;
  constructor(private route: ActivatedRoute, private router: Router, public routes: RoutesService, public auth: AuthService) {
    this.auth.loginObserver$.subscribe((login) => {
      console.log('login event');
      if (login) {
        this.name = login.user.name;
        this.email = login.user.email;
        this.isLogged = true;
      }
      else {
        this.name = '';
        this.email = '';
        this.isLogged = false;
      }
    });
    this.auth.loadLogin();
  }

  ngOnInit(): void {
  }
  onLogout() {
  }

  isActive() {
    this.href = this.router.url;
  }

  onLogin() {
    this.router.navigate(['/']);
  }
  onRegister() {
    this.router.navigate(['/']);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
