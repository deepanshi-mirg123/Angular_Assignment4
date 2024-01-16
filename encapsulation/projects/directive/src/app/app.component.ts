import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

//was trying to add None, but was unable to add shadowdom and none simulatneously.
export class AppComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy {
  title = 'directive';
Angular: string | undefined;
  

  ngDoCheck(): void {
  }
  ngOnChanges() {
    console.log("changes done");
  }
  ngOnInit(): void {
    console.log("ngOnInit Initialized");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit Done");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Done");
  }
  ngAfterViewInit() {
    console.log("ngAftereViewInit Done");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Done");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy Done");
  }

  onclick() {
    alert('Wants to Display Angular Information?');
  }
}

