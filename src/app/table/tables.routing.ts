import { Routes } from '@angular/router';

import { DatatableComponent } from './data-table/data-table.component';
import { BasicComponent } from './basic/basic.component';
import { SmarttableComponent } from './smart-table/smart-table.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'datatable',
        component: DatatableComponent,
        data: {
          title: 'Data Table',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Data Table' }]
        }
      },
      {
        path: 'basictable',
        component: BasicComponent,
        data: {
          title: 'Basic Table',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Basic Table' }]
        }
      },
      {
        path: 'smarttable',
        component: SmarttableComponent,
        data: {
          title: 'Smart Table',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Smart Table' }]
        }
      }
    ]
  }
];
