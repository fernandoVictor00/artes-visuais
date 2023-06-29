import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginPageRoutingModule,ReactiveFormsModule],
  exports: [],
})
export class LoginPageModule {}
