import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // proprietà che in qualsiasi momento mi dice se l'utente ha effettuato il login
  private isLoggedIn: boolean = false;
  // Eventuale token bearer da memorizzare (inviato dal server)
  private tokenBearer: any;
  // Subject/observable per inviare il messaggio di errore di login ai componenti in ascolto
  private loginError = new Subject<string>();
  loginErrorObs = this.loginError.asObservable();

  // Subject/observable per inviare il messaggio di login effettuato ai componenti in ascolto
  private loggedIn = new Subject<boolean>();
  loggedInObs = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  login(credentials: any): void {
    // Sistema fake di autenticazione
    // Il vero sistema dovrebbe prevedere una richiesta ad un server esterno per l'autenticazione
    // HttpClient...
    if (credentials.username == 'pippo@gmail.com' && credentials.password == 'password') {
      // Le credenziali sono corrette
      // Memorizzo il token ricevuto dal server
      this.tokenBearer = 'FHDSDFHS23564527345GSGFU';

      // Devo impostare il servizio in modo che si certifichi l'autenticazione
      this.isLoggedIn = true;
      // Avviso i componenti che l'utente si è loggato
      this.loggedIn.next(true);
      // Navigo al componente home
      this.router.navigate(['']);
    }
    else {
      // Avviso i componenti in ascolto che c'è stato un errore nella validazione
      this.loginError.next('Username or password invalid.');
    }
  }

  logout(): void {
    this.tokenBearer = null;
    this.isLoggedIn = false;
    this.loggedIn.next(false);
  }
}
