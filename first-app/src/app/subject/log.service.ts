import { Injectable } from '@angular/core';
import { Messaggio } from './messaggio';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private messaggi: Messaggio[] = [];
  private logSubject = new Subject<Messaggio>();
  logObservable = this.logSubject.asObservable();

  constructor() { }

  registra(testo: string) {
    let nuovoLog: Messaggio = new Messaggio(new Date(), testo);
    this.messaggi.push(nuovoLog);
    this.logSubject.next(nuovoLog);
  }

}
