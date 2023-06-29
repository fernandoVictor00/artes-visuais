import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
  ){
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
    });
  }
  submitLogin(){
    console.log('olá');
  }
}

