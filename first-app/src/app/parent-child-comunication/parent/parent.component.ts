import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messaggi: string[] = ['ciao', 'buongiorno', 'buonasera'];

  aggiungiMessaggio(nuovoMessaggio: string): void {
    this.messaggi.push(nuovoMessaggio);
  }
}
