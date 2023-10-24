import { Component } from '@angular/core';

@Component({
  selector: 'app-ripasso',
  templateUrl: './ripasso.component.html',
  styleUrls: ['./ripasso.component.css']
})
export class RipassoComponent {
  nome: string = 'Andrea';
  cognome: string = 'Trentini';
  materia: string = 'Informatica';
  studenti: string[] = ['BADEMER PAOLO','BARTOLI PAOLO EUGENIO','BENINI EMANUELE'];
}

