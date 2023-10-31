import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomEmitterService {

  randomEmitter = new Observable<number>(emitter => {
    setInterval(() => {
      emitter.next(Math.random());
    }, 1000);
  })

  constructor() { }
}
