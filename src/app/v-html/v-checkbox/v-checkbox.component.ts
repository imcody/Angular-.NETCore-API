import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";

@Component({
  selector: 'v-checkbox',
  templateUrl: './v-checkbox.component.html',
  providers: [MakeProvider(VZeroCheckboxComponent)]
})
export class VZeroCheckboxComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() iconClass: string;
  @Input() required = 'false';
  @Input() errorMessage = '';
  @Input() checked = 'false';
  @Input() binary: boolean = false;
  @Input() value: string;
  @Input() selectedItems: string[] = null;
  @Input() disabled: boolean = false;
  @Input() labelStyleClass: string;
}
