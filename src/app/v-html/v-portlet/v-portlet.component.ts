import { Component, Input } from '@angular/core';
import { menuSlideDown } from '@app/v-html/animations/animations';

export class FilterState {
  filterList = 'in';
}

@Component({
  selector: 'v-portlet',
  templateUrl: './v-portlet.component.html',
  styles: [],
  animations: [
    menuSlideDown
  ]
})

export class VZeroPortletComponent {
  @Input() iconClass = '';
  @Input() title: string;
  @Input() noPaddingBottom = false;

  filterContent: FilterState = new FilterState();

  constructor() { }

  toggleList(list: FilterState) {
    list.filterList = list.filterList === 'out' ? 'in' : 'out';
  }

}


