import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';

import { TanneryLeathersComponent } from './tannery-leathers.component';
import { AddEditTanneryLeatherComponent } from './add-edit-tannery-leather/add-edit-tannery-leather.component';
import { TanneryLeathersService } from './tannery-leathers.service';
import { TanneryLeatherRoutes } from './tannery-leathers.routing';


@NgModule({
  imports: [
    RouterModule.forChild(TanneryLeatherRoutes),
    ModalModule.forRoot(),
    SharedModule,
    NgxPaginationModule,
    TableModule
  ],
  exports: [
    RouterModule,
    TanneryLeathersComponent,
    AddEditTanneryLeatherComponent
  ],
  declarations: [
    TanneryLeathersComponent,
    AddEditTanneryLeatherComponent
  ],
  providers: [
    TanneryLeathersService,
  ]
})
export class TanneryLeathersModule { }
