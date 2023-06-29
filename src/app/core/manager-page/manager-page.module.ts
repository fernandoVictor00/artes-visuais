import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerPageComponent } from './manager-page.component';
import { ManagerPageRoutingModule } from './manager-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagerPageComponent,
  ],
  imports: [
    CommonModule,
    ManagerPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class ManagerPageModule {}


