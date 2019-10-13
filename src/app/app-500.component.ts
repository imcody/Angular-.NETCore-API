import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-500',
  templateUrl: './app-500.component.html'
})
export class App500Component extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector);
  }
}

