import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Notification} from '../models/notification.model'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifs:Notification[]=[{detail:"Hello"}];
  notifsUpdated=new Subject<Notification[]>();

  getAllNotifs(){
    return this.notifs;

  }
  addNotifs(message:string){
    
    let notif:Notification;
    notif.detail=message;
    this.notifs.push(notif);
    this.notifsUpdated.next(this.notifs);
  }


}
