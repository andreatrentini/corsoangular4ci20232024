import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { timer } from 'rxjs';
import { Messaggio } from '../messaggio';

@Component({
  selector: 'app-subject-receiver-b',
  templateUrl: './subject-receiver-b.component.html',
  styleUrls: ['./subject-receiver-b.component.css']
})
export class SubjectReceiverBComponent implements OnInit {

  messaggioLog!: string;
  logObserver: any;
  messaggi!: Messaggio[];

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logObserver = this.logService.logObservable.subscribe(messaggio => {
      this.messaggioLog = messaggio.toString;
      timer(3000).subscribe(() => {
        this.messaggioLog = '';
      })
    })
  }

  visualizzaTuttiILog(): void {
    this.messaggi = this.logService.Messaggi;
  }

}
