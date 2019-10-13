import { Routes } from '@angular/router';

import { BasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicform',
        component: BasicComponent,
        data: {
          title: 'Basic Form',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Basic Form' }]
        }
      },
      {
        path: 'formvalidation',
        component: FormvalComponent,
        data: {
          title: 'Form Validation Page',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Form Validation Page' }]
        }
      }
    ]
  }
];
