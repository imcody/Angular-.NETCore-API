import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutes } from './tables.routing';
import { DatatableComponent } from './data-table/data-table.component';
import { BasicComponent } from './basic/basic.component';
import { SmarttableComponent } from './smart-table/smart-table.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TablesRoutes), NgxDatatableModule, Ng2SmartTableModule],
  declarations: [DatatableComponent, BasicComponent, SmarttableComponent]
})
export class TablesModule { }
