import { Injectable } from '@angular/core';
import { Messaggio } from './messaggio';
import { Subject } from 'rxjs';
import { ILogJson } from './i-log-json.interface';

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
    console.log(this.messaggi);
  }

  salvaLog() {
    localStorage.setItem('log', JSON.stringify(this.messaggi));
  }

  caricaLog() {
    let tmp = localStorage.getItem('log');
    if(tmp) {
      this.messaggi = JSON.parse(tmp).map((elem: {dataOra: string, testo: string}) => new Messaggio(new Date(elem.dataOra), elem.testo));
      console.log(this.messaggi);              
    }
  }

  get Messaggi() {
    return this.messaggi.slice();
  }

}
