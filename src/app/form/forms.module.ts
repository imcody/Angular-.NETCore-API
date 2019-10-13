import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormsRoutes } from './forms.routing';
import { BasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(FormsRoutes), FormsModule],
  declarations: [BasicComponent, FormvalComponent]
})
export class FormModule {}
