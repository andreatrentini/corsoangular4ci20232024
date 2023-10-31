import { Injectable } from '@angular/core';
import { IStudente } from './i-studente';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  studenti: IStudente[] = [];
  
  constructor() { }

  add(nuovoStudente: IStudente): void {
    this.studenti.push(nuovoStudente);
    console.log(this.studenti);
  }

  remove(index: number): void {
    this.studenti.splice(index, 1);
  }

  update(studenteModificato: IStudente, index: number): void {
    this.studenti[index] = studenteModificato;
  }

}
