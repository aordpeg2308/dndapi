import { Component } from '@angular/core';
import { Raza } from '../../interfaces/raza.interface';
import { BusquedasService } from '../../services/busquedas.service';

@Component({
  selector: 'razas',
  templateUrl: './razas.component.html',
  styles: ``
})
export class RazasComponent {
  public initialValue: string ="";
  public raza?: Raza;
  public isLoading: boolean = false;


  constructor(private busquedasService: BusquedasService){


  }
  ngOninit(): void{
    this.raza = this.busquedasService.cacheStore.porRaza.raza;
    this.initialValue = this.busquedasService.cacheStore.porRaza.term;
  }

  buscarRaza (term:string):void{
  this.isLoading =true;
  this.busquedasService.obtenerRaza(term).subscribe(raz=>{
    this.raza = raz;
    this.isLoading = false;
  })
}
}
