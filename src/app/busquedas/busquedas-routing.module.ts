import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstruoComponent } from './monstruos/monstruo/monstruo.component';
import { RazasComponent } from './razas/razas/razas.component';


const routes: Routes = [
  {
    path: 'porMonstruo',
    component: MonstruoComponent,
  },
  {
    path: 'porRaza',
    component: RazasComponent,
  },
  {
    path: '**',
    redirectTo: 'porRaza', 
  }
];


@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ],
  })

  export class CountriesRoutingModule { }
