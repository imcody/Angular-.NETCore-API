import { Component, Injector, Input } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'v-user-avatar',
  templateUrl: './v-user-avatar.component.html'
})
export class VZeroUserAvatarComponent extends AppComponentBase  {

  @Input() class = 'm--img-rounded m--marginless';
  @Input() url: string = null;
  @Input() align: string;
  @Input() width = '50';
  @Input() loadFromProfile: boolean = true;

  get avatarUrl(): string {
    if (this.loadFromProfile) {
      return this.appSession.avatarUrl;
    }
    return this.url;
  }

  constructor(injector: Injector) {
    super(injector);
  }
}
