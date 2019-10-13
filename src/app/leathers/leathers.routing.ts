import { Routes } from '@angular/router';
import { LeathersComponent } from './leathers.component';

export const LeatherRoutes: Routes = [
    {
        path: '',
        component: LeathersComponent,
        data: { permission: 'Pages.Leather' },
    },
];
