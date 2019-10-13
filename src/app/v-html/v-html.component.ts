import { Component, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation, componentSwitch } from '@shared/animations/routerTransition';
import { ViewEncapsulation } from '@angular/core';

export interface SelectItem {
  label: string;
}

@Component({
  selector: 'app-v-html',
  templateUrl: './v-html.component.html',
  styleUrls: ['./v-html.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VHtmlComponent extends AppComponentBase {


  @Output() newImageUploaded = new EventEmitter<string>();
  checked: boolean = false;

  checkboxList: string[] = [];
  selectOptions: SelectItem[] = [];

  selected: any;
  constructor(injector: Injector) {
    super(injector);
    this.selectOptions = [
      { label: 'Option1' },
      { label: 'Option2' },
      { label: 'Option3' },
      { label: 'Option4' }
    ];
  }

  onImageUploaded(url) {
    this.newImageUploaded.emit(url);
  }

}
