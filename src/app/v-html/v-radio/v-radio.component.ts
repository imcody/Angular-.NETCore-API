import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";

@Component({
  selector: 'v-radio',
  templateUrl: './v-radio.component.html',
  providers: [MakeProvider(VZeroRadioComponent)]
})
export class VZeroRadioComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() selectedItem: string[] = [];
  _inputValue: any
  @Input('input-value') set inputValue(newValue) {
    if (newValue === "true") {
      this._inputValue = true;
    } else if (newValue === "false") {
      this._inputValue = false;
    } else {
      this._inputValue = newValue;
    }
  }
  @Input() required = 'false';
  @Input() errorMessage = '';
  @Input() iconClass = '';
  @Input() isLayoutHorizontal = false;
  @Input() disabled = 'false';
}
