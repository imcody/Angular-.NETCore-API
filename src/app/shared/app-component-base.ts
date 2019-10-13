import { ElementRef, Injector } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { PermissionCheckerService } from '@abp/auth/permission-checker.service';
import { FeatureCheckerService } from '@abp/features/feature-checker.service';
import { LocalizationService } from '@abp/localization/localization.service';
import { MessageService } from '@abp/message/message.service';
import {
    AbpMultiTenancyService,
} from '@abp/multi-tenancy/abp-multi-tenancy.service';
import { NotifyService } from '@abp/notify/notify.service';
import { SettingService } from '@abp/settings/setting.service';
import { AppConsts } from './AppConsts';
import { AppSessionService } from './session/app-session.service';
import { Subscription } from 'rxjs';

export abstract class AppComponentBase {

    
    parametersSubscriptions: Subscription[];
    localizationSourceName = AppConsts.localization.defaultLocalizationSourceName;

    localization: LocalizationService;
    permission: PermissionCheckerService;
    feature: FeatureCheckerService;
    notify: NotifyService;
    setting: SettingService;
    message: MessageService;
    multiTenancy: AbpMultiTenancyService;
    appSession: AppSessionService;
    elementRef: ElementRef;
    route: ActivatedRoute;
    router: Router;
    activatedRoute: ActivatedRoute;

    get debugEnabled(): boolean {
        return this.route.snapshot.queryParams['debug'] === 'true';
    }

    constructor(injector: Injector) {
        this.localization = injector.get(LocalizationService);
        this.permission = injector.get(PermissionCheckerService);
        this.feature = injector.get(FeatureCheckerService);
        this.notify = injector.get(NotifyService);
        this.setting = injector.get(SettingService);
        this.message = injector.get(MessageService);
        this.multiTenancy = injector.get(AbpMultiTenancyService);
        this.appSession = injector.get(AppSessionService);
        this.elementRef = injector.get(ElementRef);
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
        this.activatedRoute = injector.get(ActivatedRoute);
    }

    l(key: string, ...args: any[]): string {
        let localizedText = this.localization.localize(key, this.localizationSourceName);

        if (!localizedText) {
            localizedText = key;
        }

        if (!args || !args.length) {
            return localizedText;
        }

        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    }

    isGranted(permissionName: string): boolean {
        return this.permission.isGranted(permissionName);
    }

    subscribe(variableName: string, setter: (data: any) => void): void {
        this.parametersSubscriptions.push(this.route.params.subscribe(params => {
            setter(this.route.snapshot.data[variableName]);
        }));
    }
    
    openLink(url: string): void {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.open(url, '_blank');
        } else {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
        }
    }

    reloadPage(): void {
        // required for reloading page
        this.router.routeReuseStrategy.shouldReuseRoute = function (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) {
            return false;
        };
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
    }

    insertAt = (arr: any[], index: number, ...newItems) => [
        // part of the array before the specified index
        ...arr.slice(0, index),
        // inserted items
        ...newItems,
        // part of the array after the specified index
        ...arr.slice(index)
    ]
}
