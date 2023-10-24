import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive-strutturali',
  templateUrl: './direttive-strutturali.component.html',
  styleUrls: ['./direttive-strutturali.component.css']
})
export class DirettiveStrutturaliComponent {
  messaggiEliminati: string[] = [];
  messaggi: string[] = [];

  aggiungiMessaggio(messaggio: HTMLInputElement) {
    this.messaggi.push(messaggio.value);
  }

  eliminaMessaggio(indice: number) {
    let messaggioEliminato = this.messaggi.splice(indice, 1)[0];
    this.messaggiEliminati.push(messaggioEliminato);
  }

  ripristinaMessaggio(indice: number){
    let messaggioDaRipristinare = this.messaggiEliminati.splice(indice, 1)[0];
    this.messaggi.push(messaggioDaRipristinare);
  }
}

