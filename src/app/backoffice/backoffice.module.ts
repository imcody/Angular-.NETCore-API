import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserServiceProxy, FarmServiceProxy } from '@shared/service-proxies/service-proxies';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';

import { BackofficeRoutes } from './backoffice.routing';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UsersResolverService } from './users/users-resolver.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';

import { FarmsComponent } from './farms/farms.component';
import { AddEditFarmComponent } from './farms/add-edit-farm/add-edit-farm.component';
import { FarmsResolverService } from './farms/farms-resolver.service';
import { FarmsService } from './farms/farms.service';


@NgModule({
  imports: [
    RouterModule.forChild(BackofficeRoutes),
    ModalModule.forRoot(),
    SharedModule,
    NgxPaginationModule,
    TableModule
  ],
  exports: [
    RouterModule,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    FarmsComponent,
    AddEditFarmComponent
  ],
  declarations: [
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    FarmsComponent,
    AddEditFarmComponent
  ],
  providers: [
    UserServiceProxy,
    UsersService,
    UsersResolverService,
    FarmServiceProxy,
    FarmsService,
    FarmsResolverService,
  ]
})
export class BackofficeModule { }
