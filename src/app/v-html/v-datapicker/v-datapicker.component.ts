import { Component, Input, OnInit } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'v-datapicker',
  templateUrl: './v-datapicker.component.html',
  providers: [MakeProvider(VZeroDatapickerComponent)],
  encapsulation: ViewEncapsulation.None
})
export class VZeroDatapickerComponent extends AbstractValueAccessor implements OnInit {
  currentYear: string;
  currentTime: Date;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string = '';
  @Input() required = 'false';
  @Input() errorMessage = '';
  @Input() yearNavigator: false;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  ngOnInit() {
    this.yearDigits();
  }

  yearDigits() {
    this.currentTime = new Date()
    this.currentYear = this.currentTime.getFullYear().toString();
  }
}
