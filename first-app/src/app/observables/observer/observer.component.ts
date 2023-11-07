import { Component } from '@angular/core';
import { RandomEmitterService } from '../random-emitter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {

  constructor(private emitterService: RandomEmitterService) {}

  numeri: number[] = [];
  numeriSbagliati: number[] = [];
  messaggio!: string;
  osservatore!: Subscription;

  iniziaAdOsservare(): void {
    this.osservatore = this.emitterService.randomEmitter.subscribe({
      next: numero => { 
        this.numeri.push(numero); 
      },
      error: numero => { 
        this.numeriSbagliati.push(numero)
      },
      complete: () => {
        this.messaggio = 'Completato l\'invio dei numeri.';
        this.osservatore.unsubscribe();}
    })
  }

  nonOsservarePiu(): void {
    this.emitterService.fermaTimer();
    this.osservatore.unsubscribe();
  }

}
