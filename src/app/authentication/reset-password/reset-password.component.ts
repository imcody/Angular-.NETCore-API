import { Component, Injector, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponentBase } from '@app/shared/app-component-base';
import { ResetPasswordInput, UserServiceProxy } from '@app/shared/service-proxies/service-proxies';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends AppComponentBase implements OnInit {

    token: string;
    confirmPassword: string;
    user: ResetPasswordInput = new ResetPasswordInput();


    constructor(
        private _userServiceProxy: UserServiceProxy,
        private _route: ActivatedRoute,
        private _router: Router,
        injector: Injector) {
        super(injector);
        this.token = this._route.snapshot.params['token'];
    }

    ngOnInit(): void {
        this.user = new ResetPasswordInput();
    }

    save(): void {
        this.user.token = this.token;
        this._userServiceProxy.resetPassword(this.user)
            .subscribe(() => {
                this.message.success(this.l('Password has been successfully changed, you can now log in using your new password'),
                this.l('Password changed'));
                location.assign('/');
            });
    }
}
