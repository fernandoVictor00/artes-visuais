import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerPageComponent } from './manager-page.component';
import { ManagerPageRoutingModule } from './manager-page-routing.module';


@NgModule({
  declarations: [
    ManagerPageComponent,
  ],
  imports: [
    CommonModule,
    ManagerPageRoutingModule,
  ],
  exports: [],
})
export class ManagerPageModule {}


