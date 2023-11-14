import { Component } from '@angular/core';
import { Persona } from './common/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  persona: Persona = new Persona('andrea', 'trentini');

  test(): void {
    console.log(this.persona.Nome);
    this.persona.Nome = 'marco';
  }
}
