import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationRoutes } from './authentication.routing';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    ResetPasswordComponent
    ],
    providers: [
        LoginService
    ]
})
export class AuthenticationModule {}
