import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./core/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'aplicacao-teste',
    loadChildren: ()=>
      import('./core/aplicacao-teste/aplicacao-teste.module').then((m) =>m.AplicacaoTesteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
