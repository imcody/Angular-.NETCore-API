import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeatherServiceProxy } from '@shared/service-proxies/service-proxies';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';

import { LeathersComponent } from './leathers.component';
import { AddEditLeatherComponent } from './add-edit-leather/add-edit-leather.component';
import { LeathersResolverService } from './leathers-resolver.service';
import { LeathersService } from './leathers.service';
import { LeatherRoutes } from './leathers.routing';
import { LeatherDetailsComponent } from './leather-details/leather-details.component';


@NgModule({
  imports: [
    RouterModule.forChild(LeatherRoutes),
    ModalModule.forRoot(),
    SharedModule,
    NgxPaginationModule,
    TableModule
  ],
  exports: [
    RouterModule,
    LeathersComponent,
    AddEditLeatherComponent,
    LeatherDetailsComponent
  ],
  declarations: [
    LeathersComponent,
    AddEditLeatherComponent,
    LeatherDetailsComponent
  ],
  providers: [
    LeatherServiceProxy,
    LeathersService,
    LeathersResolverService,
  ]
})
export class LeathersModule { }
