import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-in-child',
  templateUrl: './in-child.component.html',
  styleUrls: ['./in-child.component.css']
})
export class InChildComponent {
  @Input() messaggiDaVisualizzare!: string[];

  elimina(index: number): void {
    this.messaggiDaVisualizzare.splice(index, 1);
  }
}
