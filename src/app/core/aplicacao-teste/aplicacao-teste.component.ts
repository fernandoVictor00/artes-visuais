import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicacao-teste',
  templateUrl: './aplicacao-teste.component.html',
  styleUrls: ['./aplicacao-teste.component.css'],
})
export class AplicacaoTesteComponent {
  constructor(private router: Router) {}
  redirectPage(redirect:string) {
    this.router.navigate([redirect]);
  }
}
