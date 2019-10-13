import { AbpModule } from '@abp/abp.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '@app/shared/components/breadcrumbs.component';
import { LinkComponent } from '@app/shared/components/link.component';
import { OverlayPanelComponent } from '@app/shared/components/overlaypanel.component';
import { UploaderComponent } from '@app/shared/components/uploader.component';
import { VZeroHtmlModule } from '@app/v-html/v-html.module';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabViewModule } from 'primeng/tabview';

import { AppAuthService } from './auth/app-auth.service';
import { AppRouteGuard } from './auth/auth-route-guard';
import { AppUrlService } from './nav/app-url.service';
import { ServiceProxyModule } from './service-proxies/service-proxy.module';
import { AppSessionService } from './session/app-session.service';

@NgModule({
    imports: [
        CommonModule,
        AbpModule,
        RouterModule,
        FormsModule,
        FileUploadModule,
        OverlayPanelModule,
        DialogModule,
        TabViewModule,
        VZeroHtmlModule
    ],
    declarations: [
        LinkComponent,
        BreadcrumbsComponent,
        OverlayPanelComponent,
        UploaderComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        JsonpModule,
        AbpModule,
        ServiceProxyModule,
        FileUploadModule,
        OverlayPanelModule,
        LinkComponent,
        BreadcrumbsComponent,
        OverlayPanelComponent,
        UploaderComponent,
        DialogModule,
        TabViewModule,
        VZeroHtmlModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppSessionService,
                AppUrlService,
                AppAuthService,
                AppRouteGuard
            ]
        };
    }
}
