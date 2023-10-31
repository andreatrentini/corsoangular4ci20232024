import { Component } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { IStudente } from '../i-studente';

@Component({
  selector: 'app-studenti-form',
  templateUrl: './studenti-form.component.html',
  styleUrls: ['./studenti-form.component.css']
})
export class StudentiFormComponent {

  // Nuova istanza del servizio con array nuovo solo per questo componente
  // Si usa solo raramente
  studentiServiceLocale = new StudentiService();

  // Dependency injection: studentiServiceGlobale rappresenta l'istanza 
  // globale del servizio
  constructor(private studentiServiceGlobale: StudentiService) {}

  inviaStudente(inputNome: HTMLInputElement, 
                inputCognome: HTMLInputElement, 
                inputClasse: HTMLInputElement): void {
    
    let nuovoStudente: IStudente = {
      nome: inputNome.value,
      cognome: inputCognome.value,
      classe: inputClasse.value
    };

    this.studentiServiceGlobale.add(nuovoStudente);
  }


}
