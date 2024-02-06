import { Component } from '@angular/core';
import { ArtistsSearchComponent } from './artists-search/artists-search.component';
import { ArtistsGridComponent } from './artists-grid/artists-grid.component';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [ArtistsSearchComponent, ArtistsGridComponent],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {

  // Attributo utilizzato per memorizzare l'arrey di artisti ricevuto da spotify
  artists: any;

  // Dependency injection: utilizzo nel componente l'istanza del servizio Spotify
  constructor(private spotifyService: SpotifyService) {}

  // Il metodo searchArtist verrà eseguito in risposta all'event onSearchArtist
  searchArtist(artistName: string) {
    // Il metodo searchArtist restituisce un Observable.
    // Per ottenere i dati devo utilizzare il metodo subscribe
    // La variabile dati conterrà la risposta ottenuta da spotify.
    this.spotifyService.searchArtist(artistName).subscribe(dati => {
      // Memorizzo in artists lìelenco degli artisti
      this.artists = dati.artists.items;
      console.log(dati);
    })
  }
}
