import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-subject-emitter',
  templateUrl: './subject-emitter.component.html',
  styleUrls: ['./subject-emitter.component.css']
})
export class SubjectEmitterComponent {

  // Dependency injection
  constructor(private logService: LogService) {}

  registraLog(messaggio: string) {
    this.logService.registra(messaggio);
  }

}
