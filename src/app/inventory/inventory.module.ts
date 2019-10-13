import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventoryServiceProxy } from '@shared/service-proxies/service-proxies';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';

import { InventoryComponent } from './inventory.component';
import { AddEditInventoryComponent } from './add-edit-inventory/add-edit-inventory.component';
import { InventoryResolverService } from './inventory-resolver.service';
import { InventoryService } from './inventory.service';
import { InventoryRoutes } from './inventory.routing';


@NgModule({
  imports: [
    RouterModule.forChild(InventoryRoutes),
    ModalModule.forRoot(),
    SharedModule,
    NgxPaginationModule,
    TableModule
  ],
  exports: [
    RouterModule,
    InventoryComponent,
    AddEditInventoryComponent
  ],
  declarations: [
    InventoryComponent,
    AddEditInventoryComponent
  ],
  providers: [
    InventoryServiceProxy,
    InventoryService,
    InventoryResolverService,
  ]
})
export class InventoryModule { }
