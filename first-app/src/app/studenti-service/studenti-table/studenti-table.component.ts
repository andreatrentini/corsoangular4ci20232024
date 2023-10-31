import { Component, OnInit } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { IStudente } from '../i-studente';

@Component({
  selector: 'app-studenti-table',
  templateUrl: './studenti-table.component.html',
  styleUrls: ['./studenti-table.component.css']
})
export class StudentiTableComponent implements OnInit {

  studentiDaVisualizzare!: IStudente[];
   
  constructor(private studentiService: StudentiService) {}

  ngOnInit(): void {
    this.studentiDaVisualizzare = this.studentiService.studenti; 
  }

  elimina(index: number): void {
    this.studentiService.remove(index);
  }

}
