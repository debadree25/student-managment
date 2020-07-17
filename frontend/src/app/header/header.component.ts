import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../services/routes.service';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import{Notification} from '../models/notification.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href: string;
  isRoundButton: boolean = true;
  name = '';
  email = '';
  isLogged = false;
  notifs: Notification[];
  notifCount:number=0;


  constructor(private route: ActivatedRoute, public router: Router,
    public routes: RoutesService,
    public auth: AuthService,
    private notifService: NotificationService) {
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

    this.notifs = this.notifService.getAllNotifs();
    this.notifCount=this.notifs.length;
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

  goBack() {
    window.history.back();
  }

  search(f: NgForm) {
    console.log(f.value)
  }
}
