import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgxSliderModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
