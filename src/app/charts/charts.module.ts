import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';

import { ChartsRoutes } from './charts.routing';
import { ChartistjsComponent } from './chartist-js/chartistjs.component';
import { DynamicChartComponent } from './chartist-js/dynamic.component';
import { ChartjsComponent } from './chart-js/chartjs.component';

@NgModule({
  imports: [CommonModule, ChartsModule, NgbModule, ChartistModule, RouterModule.forChild(ChartsRoutes), FormsModule],
  declarations: [ChartjsComponent, DynamicChartComponent, ChartistjsComponent]
})
export class ChartModule {}
