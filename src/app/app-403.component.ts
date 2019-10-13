import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-403',
  templateUrl: './app-403.component.html'
})
export class App403Component extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector);
  }
}

