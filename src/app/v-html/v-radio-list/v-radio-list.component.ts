import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";

@Component({
  selector: 'v-radio-list',
  templateUrl: './v-radio-list.component.html',
  providers: [MakeProvider(VZeroRadioListComponent)]
})
export class VZeroRadioListComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() required = 'false';
  @Input() errorMessage = '';
}
