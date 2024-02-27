import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { AlbumsGridComponent } from './albums-grid/albums-grid.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, AlbumsGridComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {

  // Importante: solo le proprietà (o attributi) definite nella classe del componente
  // Possono essere usate nel file (template) HTML
  artistsId!: string;
  albums: any;
  artistName!: string;
  inAttesaDati: boolean = true;

  // L'oggetto di tipo subscription (abbonamento) mi consente di gestire il subscribe su un observable
  // E' importante eseguire sempre l'unsubscribe prima di uscire dal componente
  routeSub!: Subscription;

  // ActivatedRoute mi consente di ottenere informazioni dalla URL corrente
  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    // Params è un observable che mi consente di controllare se la URL (in particolare il
    // parametro idArtista) cambia.
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      // this.artistId contiene l'id dell'artista del quale voglio visualizzare gli albums
      // Il valore viene preso dalla URL
      this.artistsId = params['id'];
      console.log(this.artistsId);
      // Utilizzo il metodo getAlbums di SpotifyService per ottenere la lista degli album
      // dell'artista selezionato
      // getAlbums restituisce un observable: DEVO usare subscribe
      this.spotifyService.getAlbums(this.artistsId).subscribe(data => {
        // E' arrivata la risposa dalla API di spotify
        // La risposta è contenuta nella variabile data
        // memorizzo l'array items (contiene l'array degli album) nella proprietà albums
        timer(3000).subscribe(() => {
          if (data.items.length > 0) {
            this.albums = data.items;
            if (this.albums[0].artists.length > 0) {
              this.artistName = this.albums[0].artists[0].name;
              this.inAttesaDati = false;
            }
          }
        });
        
        console.log(data);
      })
    })
  }

  // Importante: eseguire unsubscribe!
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
