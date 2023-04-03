import { Component } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true,
  };
}
