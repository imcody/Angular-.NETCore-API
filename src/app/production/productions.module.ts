import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductionServiceProxy } from '@shared/service-proxies/service-proxies';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';

import { ProductionsComponent } from './productions.component';
import { EditProductionComponent } from './edit-production/edit-production.component';
import { ProductionsResolverService } from './productions-resolver.service';
import { ProductionsService } from './productions.service';
import { ProductionRoutes } from './productions.routing';
import { DetailsProductionComponent } from './details-production/details-production.component';
import { DetailPropertyComponent } from './details-production/detail-property/detail-property.component';
import { EditPropertyComponent } from './edit-production/edit-property/edit-property.component';


@NgModule({
  imports: [
    RouterModule.forChild(ProductionRoutes),
    ModalModule.forRoot(),
    SharedModule,
    NgxPaginationModule,
    TableModule
  ],
  exports: [
    RouterModule,
    ProductionsComponent,
    EditProductionComponent,
    EditPropertyComponent,
    DetailsProductionComponent,
    DetailPropertyComponent
  ],
  declarations: [
    ProductionsComponent,
    EditProductionComponent,
    EditPropertyComponent,
    DetailsProductionComponent,
    DetailPropertyComponent
  ],
  providers: [
    ProductionServiceProxy,
    ProductionsService,
    ProductionsResolverService,
  ]
})
export class ProductionsModule { }
