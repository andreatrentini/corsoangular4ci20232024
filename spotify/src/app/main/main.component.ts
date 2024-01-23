import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  // Attraverso il meccanismo di dependency injection posso utilizzare l'istanza
  // della classe SpotifyService creata all'avvio dell'applicazione.
  constructor(private spotifyService: SpotifyService) {}

  // Il metodo ngOnInit viene eseguito automoaticamente quando il componente viene creato.
  ngOnInit(): void {
    this.spotifyService.getToken();  
  }
}
