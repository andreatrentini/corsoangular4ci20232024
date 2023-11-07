import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomEmitterService {

  timer: any;

  randomEmitter = new Observable<number>(emitter => {
    this.timer = setInterval(() => {
      let numero = Math.random();
      if (numero > 0.8) {
        emitter.complete();
        clearInterval(this.timer);
      }
      else {
        if (numero < 0.2) {
          emitter.error(numero)
        }
        else {
          emitter.next(numero);
        }
      }
    }, 1000);
  })

  fermaTimer(): void {
    clearInterval(this.timer);
  }

  constructor() { }
}
