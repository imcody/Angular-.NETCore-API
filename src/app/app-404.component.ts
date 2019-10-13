import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-404',
  templateUrl: './app-404.component.html'
})
export class App404Component extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector);
  }
}

