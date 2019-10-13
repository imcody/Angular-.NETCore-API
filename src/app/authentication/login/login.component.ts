import { Component, Injector, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { LoginService } from './login.service';
import { AbpSessionService } from '@abp/session/abp-session.service';
import { UserServiceProxy, PasswordRecoveryInput } from '@app/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AppComponentBase implements OnInit, AfterViewInit {

  loginform = true;
  recoverform = false;

  @ViewChild('cardBody') cardBody: ElementRef;
  submitting: boolean = false;

  versionText: string;
  currentYear: number;

  passwordRecoveryInput: PasswordRecoveryInput = new PasswordRecoveryInput();

  constructor(
    injector: Injector,
    public loginService: LoginService,
    private _router: Router,
    private _userService: UserServiceProxy,
    private _sessionService: AbpSessionService
  ) {
    super(injector);

    this.currentYear = new Date().getFullYear();
    this.versionText = this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
  }

  ngOnInit(): void {
    if (this.appSession.user) {
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit(): void {
    $(this.cardBody.nativeElement).find('input:first').focus();
  }

  showRecoverForm() {
    this.loginService.authenticateModel.password = null;
    this.passwordRecoveryInput.email = null;
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }

    return true;
  }

  login(): void {
    this.submitting = true;
    this.loginService.authenticate(
      () => this.submitting = false
    );
  }

  resetPasswordRequest(): void {
    this._userService.passwordRecovery(this.passwordRecoveryInput)
      .subscribe(() => {
        this.message.info(this.l('Check Email For Reset Link'), this.l('Password Reset Link Submitted'));
      });
  }
}
