import { environment } from '../../environments/environment';

export class AppConsts {

    static apiBaseUrl: string = environment.apiBaseUrl;
    static appBaseUrl: string = environment.appBaseUrl;
    static blobStorageUrl: string = environment.blobStorageUrl;

    static readonly userManagement = {
        defaultAdminUserName: 'admin'
    };

    static readonly localization = {
        defaultLocalizationSourceName: 'ResponsibleSystem'
    };

    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token'
    };

    static readonly tenants = {
        displayName: false,
        displayDbConnectionString: false
    }
}
