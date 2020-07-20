import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../models/notification.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  notifs: Notification[] = [{ detail: "Hello" }, { detail: "Hi" }];
  notifsUpdated = new Subject<Notification[]>();
  baseUrl = 'http://localhost:3000/';

  getAllNotifs() {
    console.log(this.notifs);
    this.notifsUpdated.next([...this.notifs]);
    return (this.notifs);
  }
  addNotifs(message: string) {

    const data:Notification={
      detail:message
    }
    this.notifs.push({ detail: message });
    console.log(this.notifs.length);
    const url = `${this.baseUrl}notif`;
    this.http.post<{ message: string }>(url, data).subscribe(
      (resp) => {
        console.log(resp.message);
      }
    )
    this.notifsUpdated.next([...this.notifs]);
  }


}
