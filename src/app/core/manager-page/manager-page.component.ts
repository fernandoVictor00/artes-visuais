import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent {
  constructor(private router: Router) {}
  redirectPage(redirect:string) {
    this.router.navigate([redirect]);
  }
}
