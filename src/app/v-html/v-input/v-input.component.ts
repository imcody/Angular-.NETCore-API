import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AbstractValueAccessor, MakeProvider } from "../AbstractValueAccessor";

@Component({
  selector: 'v-input',
  templateUrl: './v-input.component.html',
  providers: [MakeProvider(VZeroInputComponent)]
})
export class VZeroInputComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string = '';
  @Input() required = 'false';
  @Input() type = 'text';
  @Input() additionalInfo = "";
  @Input() errorMessage = '';
  @Input() customErrorMessage = '';
  @Input() pattern: '';
  @Input() customValidation = null;
  @Input() customErrorValidation = null;
  @Input() min = null;
  @Input() max = null;
  @Input() inline = "false";
}
