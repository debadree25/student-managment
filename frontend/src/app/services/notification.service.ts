import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Notification} from '../models/notification.model'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifs:Notification[]=[{detail:"Hello"},{detail:"Hi"}];
  notifsUpdated=new Subject<Notification[]>();

  getAllNotifs(){
    console.log(this.notifs);
    this.notifsUpdated.next([...this.notifs]);
    return (this.notifs);
  }
  addNotifs(message:string){
    
    this.notifs.push({detail:message});
    console.log(this.notifs.length)
    this.notifsUpdated.next([...this.notifs]);
  }


}
