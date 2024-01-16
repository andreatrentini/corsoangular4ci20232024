import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Il decoratore, con la proprietà providedIn: root, fa sì che all'avvio
// dell'applicazione, venga creata una istanza di questa classe, e che la stessa
// possa essere usata in qualsiasi altro servizio/componente attraverso
// dependency injection

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  clientId: string = '22bf3bb4da0a43ce8d1e3578b5e7ecdb';
  clientSecret: string = 'b976a211d2064281944d5feeb9e29de1';

  token: any;

  // Se SpotifyService deve utilizzare HttpClient per effettuare chiamate alla API di Spotify,
  // è necessario usare l'istanza di HttpClient creata con provideHttpClient in app.config.ts
  // attraverso una dependency injection
  constructor(private httpClient: HttpClient) { }

  getToken(): void {

  }
  
}
