import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css'],
})
export class ManagerPageComponent {
  managerForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private router: Router
  ){
    this.managerForm = this._fb.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      quemSou: [null, [Validators.required, Validators.nullValidator]]
    });
  }
  createUser(){
    console.log('olá');
  }
  redirectPage(redirect: string) {
    this.router.navigate([redirect]);
  }
}
