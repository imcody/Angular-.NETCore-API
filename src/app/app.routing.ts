import { Routes } from '@angular/router';

import { App403Component } from './app-403.component';
import { App404Component } from './app-404.component';
import { App500Component } from './app-500.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppRouteGuard } from './shared/auth/auth-route-guard';
import { LeathersComponent } from './leathers/leathers.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AppRouteGuard],
    canActivateChild: [AppRouteGuard],
    children: [
      { path: '', redirectTo: 'backoffice', pathMatch: 'full' },

      // ResponsibleSystem
      {
        path: 'backoffice',
        loadChildren: './backoffice/backoffice.module#BackofficeModule',
      },
      {
        path: 'leathers',
        loadChildren: './leathers/leathers.module#LeathersModule',
        data: { permission: 'Pages.Leather' }
      },
      {
        path: 'slaughter',
        loadChildren: './slaughter-leathers/slaughter-leathers.module#SlaughterLeathersModule',
        data: { permission: 'Pages.Slaughterhouse' }
      },
      {
        path: 'tannery',
        loadChildren: './tannery-leathers/tannery-leathers.module#TanneryLeathersModule',
        data: { permission: 'Pages.Tannery' }
      },
      {
        path: 'inventory',
        loadChildren: './inventory/inventory.module#InventoryModule',
        data: { permission: 'Pages.Inventory' }
      },
      {
        path: 'production',
        loadChildren: './production/productions.module#ProductionsModule',
        data: { permission: 'Pages.Production' }
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '404',
    component: App404Component
  },
  {
    path: '403',
    component: App403Component
  },
  {
    path: '500',
    component: App500Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
