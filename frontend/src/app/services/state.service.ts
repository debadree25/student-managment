import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private listUpdates = new Subject<string>();
  public listUpdates$ = this.listUpdates.asObservable();
  constructor() { }

  public updateList() {
    console.log('update');
    this.listUpdates.next('update');
  }
}
