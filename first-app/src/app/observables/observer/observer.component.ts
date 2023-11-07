import { Component } from '@angular/core';
import { RandomEmitterService } from '../random-emitter.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {

  constructor(private emitterService: RandomEmitterService) {}

  numeri: number[] = [];
  osservatore: any;

  iniziaAdOsservare(): void {
    this.osservatore = this.emitterService.randomEmitter.subscribe(numero => {
      this.numeri.push(numero);
    })
  }

}
