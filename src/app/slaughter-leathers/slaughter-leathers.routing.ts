import { Routes } from '@angular/router';
import { SlaughterLeathersComponent } from './slaughter-leathers.component';

export const SlaughterLeatherRoutes: Routes = [
    {
        path: '',
        component: SlaughterLeathersComponent,
        data: { permission: 'Pages.Slaughterhouse' },
    },
];
