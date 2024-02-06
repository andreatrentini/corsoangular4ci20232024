import { Component, Input } from '@angular/core';
import { ArtistCardComponent } from '../artist-card/artist-card.component';

@Component({
  selector: 'app-artists-grid',
  standalone: true,
  imports: [ArtistCardComponent],
  templateUrl: './artists-grid.component.html',
  styleUrl: './artists-grid.component.css'
})
export class ArtistsGridComponent {

  // artists è una proprietà del componente ArtistsGrid che riceverà in input
  // l'elenco degli artisti ottenuto dal componente parent: Artist
  @Input() artists: any;

}
