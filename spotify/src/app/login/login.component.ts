import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  // Importo la libreria ReactiveFormsModule per realizzare form reactive
  // Questa modalità mi da la possibilità di controllare i dati della form usando typescript
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
