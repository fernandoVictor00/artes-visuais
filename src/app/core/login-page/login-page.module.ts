import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginPageRoutingModule],
  exports: [],
})
export class LoginPageModule {}
