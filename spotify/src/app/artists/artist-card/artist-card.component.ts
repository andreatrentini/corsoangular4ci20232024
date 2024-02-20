import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {

  // Dependency injection: utilizzo l'oggetto router che mi consente di
  // navigare nell'applicazione attravero codice typescript
  constructor(private router: Router) {}

  @Input() artist: any;

  visualizzaAlbums(artistId: string): void {
    // Il metodo navigate mi consente di cambiare la URL attiva del browser
    this.router.navigate(['albums', artistId]);
  }
}
