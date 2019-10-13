import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';

import { SlaughterLeathersComponent } from './slaughter-leathers.component';
import { AddEditSlaughterLeatherComponent } from './add-edit-slaughter-leather/add-edit-slaughter-leather.component';
import { SlaughterLeathersService } from './slaughter-leathers.service';
import { SlaughterLeatherRoutes } from './slaughter-leathers.routing';


@NgModule({
  imports: [
    RouterModule.forChild(SlaughterLeatherRoutes),
    ModalModule.forRoot(),
    SharedModule,
    NgxPaginationModule,
    TableModule
  ],
  exports: [
    RouterModule,
    SlaughterLeathersComponent,
    AddEditSlaughterLeatherComponent
  ],
  declarations: [
    SlaughterLeathersComponent,
    AddEditSlaughterLeatherComponent
  ],
  providers: [
    SlaughterLeathersService,
  ]
})
export class SlaughterLeathersModule { }
