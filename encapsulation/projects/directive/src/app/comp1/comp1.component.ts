import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  encapsulation:  ViewEncapsulation.Emulated
})
export class Comp1Component {
  Angular: any;
  constructor(){
    console.log('Hello');
    
  }
  public Name = 'Bindings in Angular'
white: any;
text: any;
Bindings: any;
}
