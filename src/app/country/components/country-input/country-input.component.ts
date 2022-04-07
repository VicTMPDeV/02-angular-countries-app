import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() 
  public onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter(); 

  @Input()
  public inputPlaceHolder: string = '';
  
  //Debunce sin Formularios Reactivos -> Observable Subject de RxJS
  public debouncer: Subject<string> = new Subject();

  public searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe( value => {
        // console.log('debouncer: ', value);
        this.onDebounce.emit(value)
      });
  }

  search() {
    this.onEnter.emit(this.searchValue);
  }

  onKeyPress(){
    this.debouncer.next(this.searchValue);
  }

}
