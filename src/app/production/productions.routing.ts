import { Routes } from '@angular/router';
import { ProductionsComponent } from './productions.component';

export const ProductionRoutes: Routes = [
    {
        path: '',
        component: ProductionsComponent,
        data: { permission: 'Pages.Production' },
    },
];
