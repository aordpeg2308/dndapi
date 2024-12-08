import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazasComponent } from './razas/razas/razas.component';
import { MonstruoComponent } from './monstruos/monstruo/monstruo.component';
import { CountriesRoutingModule } from './busquedas-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RazasComponent,
    MonstruoComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class BusquedasModule { }
