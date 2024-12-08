import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { LoadingSniperComponent } from './components/loading-sniper/loading-sniper.component';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    SharedSidebarComponent,
    LoadingSniperComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ SharedSidebarComponent,
    LoadingSniperComponent,
    BuscadorComponent

  ]
})
export class SharedModule { }
