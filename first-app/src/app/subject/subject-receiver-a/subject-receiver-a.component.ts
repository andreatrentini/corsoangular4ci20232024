import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-subject-receiver-a',
  templateUrl: './subject-receiver-a.component.html',
  styleUrls: ['./subject-receiver-a.component.css']
})
export class SubjectReceiverAComponent implements OnInit{

  messaggioLog!: string;
  logObserver: any;

  constructor(private logService: LogService) {};

  ngOnInit(): void {
    this.logObserver = this.logService.logObservable.subscribe(messaggio => {
      this.messaggioLog = messaggio.toString;
    })
    this.logService.caricaLog();
  }

  salva() {
    this.logService.salvaLog();
  }

}
