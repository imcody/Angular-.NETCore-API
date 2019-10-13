import { Component, Input, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html'
})
export class LinkComponent extends AppComponentBase {

  @Input() label: string = '';
  @Input() url: string = '';
  @Input() imgSrc = null;
  @Input() enabled: boolean = true;
  @Input() isActive: boolean = true;

  constructor(injector: Injector) {
    super(injector);
  }

  openLink(url): void {
    if (this.enabled) {
      super.openLink(url);
    }
  }
}
