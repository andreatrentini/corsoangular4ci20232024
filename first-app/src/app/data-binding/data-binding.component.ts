import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nrStudenti: number = 21;
  nrInsegnanti: number = 2;

  coloreStudenti: string = 'blue';
  coloreInsegnanti: string = 'green';

  nomeLaboratorio: string = ' Informatica 3';

  timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.nrStudenti--;
      if (this.nrStudenti < 15) {
        this.coloreStudenti = 'red';
      }
    }, 1000);
  }

  fermaUscita(): void {
    clearInterval(this.timer);
  }

}

