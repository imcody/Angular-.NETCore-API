import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../AbstractValueAccessor';

@Component({
  selector: 'v-autocomplete',
  templateUrl: './v-autocomplete.component.html',
  providers: [MakeProvider(VZeroAutocompleteComponent)]
})
export class VZeroAutocompleteComponent extends AbstractValueAccessor {

  @Input() label: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() required = 'true';
  @Input() suggestions: string[];
  @Input() errorMessage: string = '';
  @Input() customValidation = null;
  @Input() customErrorMessage = '';
  @Input() isLayoutVertical = false;
  @Input() minCharacters;
  @Input() allowWhitespaceCharacters: boolean = false;

  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() invalidInput: EventEmitter<boolean> = new EventEmitter();

  onSearch(data) {
    this.search.emit(data);
  }

  pattern(): string {
    let pattern = '.';
    if (this.minCharacters) {
      for (let _i = 0; _i < this.minCharacters - 1; _i++) {
        pattern += '.';
      }
    }
    pattern += '+';
    return pattern;
  }

  checkForSpaces(): boolean {
    if (this.value && !this.allowWhitespaceCharacters) {
      const regexp = new RegExp('^[^\\s]+$');
      return regexp.test(this.value);
    }
    return true;
  }

  onSelect() {
    if (!this.allowWhitespaceCharacters) {
      this.value = this.value.split(' ')[0];
    }
    this.onInvalidInput();
  }

  onInvalidInput() {
    if (this.value) {
      this.invalidInput.emit(!this.checkForSpaces() ||
      (this.value.length < this.minCharacters));
    }
  }
}