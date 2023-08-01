import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerPageComponent } from './manager-page.component';
import { ManagerPageRoutingModule } from './manager-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    ManagerPageComponent,
  ],
  imports: [
    CommonModule,
    ManagerPageRoutingModule,
    ReactiveFormsModule,
    MatRadioModule ,
  ],
  exports: [],
})
export class ManagerPageModule {}


