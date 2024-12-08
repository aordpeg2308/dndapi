import { Component } from '@angular/core';
import { Monstruo } from '../../interfaces/monstruo.interface';
import { BusquedasService } from '../../services/busquedas.service';

@Component({
  selector: 'monstruo',
  templateUrl: './monstruo.component.html',
  styles: ``
})
export class MonstruoComponent {
public initialValue: string ="";
public monstruo?: Monstruo;
public isLoading: boolean = false;

constructor(private busquedasService: BusquedasService){


}
ngOninit(): void{
  this.monstruo = this.busquedasService.cacheStore.porMonstruo.monstruo;
  this.initialValue = this.busquedasService.cacheStore.porMonstruo.term;
}

buscarMonstruo (term:string):void{
this.isLoading =true;
this.busquedasService.obtenerMonstruo(term).subscribe(monst=>{
  this.monstruo = monst;
  this.isLoading = false;
})


}
}
