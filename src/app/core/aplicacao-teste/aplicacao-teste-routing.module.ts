import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoTesteComponent } from './aplicacao-teste.component';

const routes: Routes = [{ path: '', component: AplicacaoTesteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicacaoTesteRoutingModule {}
