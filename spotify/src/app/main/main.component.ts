import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  // Importante: devo importare RouterOutlet per attivare le routes definite
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {

  loggedIn: boolean = false;
  loggedInObs!: Subscription;

  // Attraverso il meccanismo di dependency injection posso utilizzare l'istanza
  // della classe SpotifyService creata all'avvio dell'applicazione.
  constructor(private spotifyService: SpotifyService,
              private authService: AuthService) {}

  // Il metodo ngOnInit viene eseguito automoaticamente quando il componente viene creato.
  ngOnInit(): void {
    this.spotifyService.getToken();  
    this.loggedInObs = this.authService.loggedInObs.subscribe(data => {
      this.loggedIn = data;
    })
  }
  ngOnDestroy(): void {
    this.loggedInObs.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
