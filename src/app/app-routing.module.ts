import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'busquedas',
    loadChildren: () => import('./busquedas/busquedas.module').then (m => m.BusquedasModule), //carga de forma perezosa
  },
  {
    path: '**',
    redirectTo: 'busquedas',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
