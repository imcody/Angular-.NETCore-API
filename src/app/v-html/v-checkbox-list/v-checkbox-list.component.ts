import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../AbstractValueAccessor';
import { VZeroCheckboxComponent } from '@app/v-html/v-checkbox/v-checkbox.component';


@Component({
  selector: 'v-checkbox-list',
  templateUrl: './v-checkbox-list.component.html',
  providers: [MakeProvider(VZeroCheckboxListComponent)]
})
export class VZeroCheckboxListComponent extends AbstractValueAccessor {
  @Input() label: string;
  @Input() required = false;
  @Input() errorMessage = '';
  @ContentChildren(VZeroCheckboxComponent) checkboxes: QueryList<VZeroCheckboxComponent>;

  isValid: boolean = true;

  Validate(): boolean {
    let isValid: boolean = true;
    if (this.required) {
      isValid = false;
      this.checkboxes.forEach(checkboxItem => {
        if (checkboxItem.value) {
          isValid = true;
        }
      });
    }
    this.isValid = isValid;
    return isValid;
  }
}
