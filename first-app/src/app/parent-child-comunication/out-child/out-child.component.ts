import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-out-child',
  templateUrl: './out-child.component.html',
  styleUrls: ['./out-child.component.css']
})
export class OutChildComponent {
  @Output() ehiNuovoMessaggio = new EventEmitter<string>();

  aggiungiMessaggio(inputMessaggio: HTMLInputElement): void {
    this.ehiNuovoMessaggio.emit(inputMessaggio.value);
    inputMessaggio.value = '';
  }
}
