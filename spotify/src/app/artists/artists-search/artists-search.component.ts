import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artists-search',
  standalone: true,
  imports: [],
  templateUrl: './artists-search.component.html',
  styleUrl: './artists-search.component.css'
})
export class ArtistsSearchComponent {
  // Rende il componente in grado di emettere un evento.
  // il nome dell'evento è onSearchArtist
  // <string>: indica che l'evento passerà a chi lo gestisce (artist component) un valore di tipo string
  @Output() onSearchArtist = new EventEmitter<string>();

  searchArtist(artistname: HTMLInputElement): void {
    // Il metodo emit emette l'eventoi passando come parametro il valore inserito nella input di tipo testo
    this.onSearchArtist.emit(artistname.value);
  }
}
