import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { UppercaseTextPipe } from './uppercase-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    UppercaseTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
