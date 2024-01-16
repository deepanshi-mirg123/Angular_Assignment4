import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp2Component {
  // constructor(){
  //   console.log('Hello');
    
  // }
  display: boolean = false;

  displaybutton() {
    this.display = true;
  }
}
