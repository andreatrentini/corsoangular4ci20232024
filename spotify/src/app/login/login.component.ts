import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription, timer } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  // Importo la libreria ReactiveFormsModule per realizzare form reactive
  // Questa modalità mi da la possibilità di controllare i dati della form usando typescript
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  // Eventuale messaggio di errore
  errorMessage: string = '';
  // Observable per controllare se il mio servizio auth mi manda un errore
  errorObs!: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.errorObs = this.authService.loginErrorObs.subscribe(error => {
      this.errorMessage = error;
      timer(3000).subscribe(() => {
        this.errorMessage = '';
      })
    })
  }

  login():void {
    this.authService.login(this.loginForm.value);
  }

  // Creo un oggetto typescript (di tipo FormGroup)
  // Al costruttore passo un oggetto che contiene l'elenco degli input che intendo 
  // definire nella form.
  // Ogni input è di tipo FormControl
  loginForm = new FormGroup({
    // FormControl prevede che al costruttore possano essere passati alcuni parametri
    // Primo parametro: valore iniziale del controllo input
    // Secondo parametro: Array di validatori: specificano quali sono le caratteristiche dei dati
    // che possono essere inseriti dall'utente
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
}
