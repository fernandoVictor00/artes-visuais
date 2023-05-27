import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  aparece=false;
  usuarios=[
    {
      name:'Fernando Victor',
      year: 22,
    },
    {
      name:'Naarah',
      year: 21,
    },
    {
      name:'Melck',
      year: 19,
    },
    {
      name:'Flor',
      year: 42,
    }
  ]

  ngOnInit() {}
  buttonClicked() {
    console.log('Botão clicado!');
    this.aparece=true;
  }
}
