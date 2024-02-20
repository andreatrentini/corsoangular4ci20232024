import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {

  artistsId!: string;

  // L'oggetto di tipo subscription (abbonamento) mi consente di gestire il subscribe su un observable
  // E' importante eseguire sempre l'unsubscribe prima di uscire dal componente
  routeSub!: Subscription;

  // ActivatedRoute mi consente di ottenere informazioni dalla URL corrente
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Params è un observable che mi consente di controllare se la URL (in particolare il
    // parametro idArtista) cambia.
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.artistsId = params['id'];
      console.log(this.artistsId);
    })
  }

  // Importante: eseguire unsubscribe!
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
