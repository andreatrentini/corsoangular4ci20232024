import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

// Il decoratore, con la proprietà providedIn: root, fa sì che all'avvio
// dell'applicazione, venga creata una istanza di questa classe, e che la stessa
// possa essere usata in qualsiasi altro servizio/componente attraverso
// dependency injection

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Questi codici si ottengono dalla dashboard della API di Spotify
  clientId: string = '22bf3bb4da0a43ce8d1e3578b5e7ecdb';
  clientSecret: string = 'b976a211d2064281944d5feeb9e29de1';

  // Nella variabile token andremo a memorizzare il token Bearer non appena ricevuto
  token: any;

  // Controllo se è il primo token oppure una richiesta di rinnovo
  firstToken: boolean = true;

  // Se SpotifyService deve utilizzare HttpClient per effettuare chiamate alla API di Spotify,
  // è necessario usare l'istanza di HttpClient creata con provideHttpClient in app.config.ts
  // attraverso una dependency injection
  constructor(private httpClient: HttpClient) { }

  // Metodo per ottenere il token da Spotify
  getToken(): void {
    // 1. Occorre consultare la documentazione della API per capire quale metodo e quali dati devono essere
    // inviato per ottenere il token

    // curl -X POST "https://accounts.spotify.com/api/token" 
    // -H "Content-Type: application/x-www-form-urlencoded" 
    // -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"

    // url alla quale inviare la richiesta
    let url = 'https://accounts.spotify.com/api/token';

    // Header della richiesta: Spotify chiede che i dati presenti nel body siano formattati nel modo
    // previsto dalle form html, cioè application/x-www-form-urlencoded
    let header = new HttpHeaders()
      .set('Content-Type','application/x-www-form-urlencoded');

    // Con HttpParams preparo il body della richiesta da inviare alla API formattata in 
    // application/x-www-form-urlencoded, come richiesto da Spotify e specificato nella header
    let body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);

    // Utilizzo httpClient(dependency injection) per inviare una richiesta POST ale server di
    // Spotify. La richiesta POST prevede una url, un body e opzionale una header.
    // Il metodo post è di tipo observable, quindi è necessario utilizzare subscribe per inviare
    // la richiesta e mettersi in ascolto della risposta.
    // I dati inviati dal server verranno memorizzati nella variabile dati,
    // successivamente verrà eseguito il codice della funzione di callback contenuta
    // fra le parentesi graffe.
    this.httpClient.post(url, body.toString(), {headers: header}).subscribe(dati => {
      // Memorizzo il token ricevuto nella proprietà token
      this.token = dati;
      
      // Controllo se è il primo token ricevuto
      if (this.firstToken) {
        // se è vero imposto il timer per richiedere i successivi
        this.firstToken = false;
        interval((this.token.expires_in - 5) * 1000).subscribe(() => {
          // Codice da eseguire ogni volta che scade l'intervallo impostato
          // Richiamo il metodo getToken()
          this.getToken();
        })
      }
      console.log(this.token);
    })

  }

  searchArtist(name: string): Observable<any> {
    /*
    curl --request GET \
    --url 'https://api.spotify.com/v1/search?q=Bon+Jovi&type=artist' \
    --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'    
    */

    // Imposto la url concatenando le stringhe uttenute da Spotify, con il nome
    // dell'artista passato fra parentesi al metodo.

    let url = 'https://api.spotify.com/v1/search?q=' + name + '&type=artist';

    // Imposto la header usando il token bearer precedentemente ottenuto
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token.access_token)

    // restituisco l'observable, cioà il metodo get con url ed header impostati
    return this.httpClient.get(url, {headers: header});
    
  }

  getAlbums(artistId: string): Observable<any> {
    /*
    curl --request GET \
    --url https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums \
    --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
    */

    //let url = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    let url = `https://api.spotify.com/v1/artists/${artistId}/albums`

    // Imposto la header usando il token bearer precedentemente ottenuto
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token.access_token)

    // restituisco l'observable, cioà il metodo get con url ed header impostati
    return this.httpClient.get(url, {headers: header});
  
  }
  
}
