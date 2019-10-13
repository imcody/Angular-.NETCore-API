import { Routes } from '@angular/router';
import { TanneryLeathersComponent } from './tannery-leathers.component';

export const TanneryLeatherRoutes: Routes = [
    {
        path: '',
        component: TanneryLeathersComponent,
        data: { permission: 'Pages.Tannery' },
    },
];
