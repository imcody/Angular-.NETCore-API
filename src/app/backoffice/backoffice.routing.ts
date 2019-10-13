import { Routes } from '@angular/router';
import { UsersResolverService } from './users/users-resolver.service';
import { UsersComponent } from './users/users.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmsResolverService } from './farms/farms-resolver.service';

export const BackofficeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        data: { permission: 'Pages.Users' },
    },
    {
        path: 'farms',
        component: FarmsComponent,
        data: { permission: 'Pages.Farms' },
    },
];
