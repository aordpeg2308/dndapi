import { Component, EventEmitter, input, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-buscador',
  templateUrl: './buscador.component.html',
  styles: ``
})

export class BuscadorComponent implements OnInit,OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();  //emisor  o Observable de string
  @Output()
  public onDebounce = new EventEmitter<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public initialValue: string ="";
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  
  
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit (value);
    })
  }

 

  onKeyPress(searchTerm: string){

    this.debouncer.next(searchTerm);
  }

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue: EventEmitter<string>  = new EventEmitter<string>();

  emitValue (term: string):void{
    this.onValue.emit(term);
  }

}
