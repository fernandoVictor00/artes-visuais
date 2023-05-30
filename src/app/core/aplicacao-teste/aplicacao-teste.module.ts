import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AplicacaoTesteComponent } from './aplicacao-teste.component';
import { AplicacaoTesteRoutingModule } from './aplicacao-teste-routing.module';

@NgModule({
  declarations: [AplicacaoTesteComponent],
  imports: [CommonModule, AplicacaoTesteRoutingModule],
  exports: [],
})
export class AplicacaoTesteModule {}
