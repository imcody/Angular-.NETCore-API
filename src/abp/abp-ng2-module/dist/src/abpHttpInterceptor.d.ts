import { Observable, Subject } from 'rxjs';
import { MessageService } from './message/message.service';
import { LogService } from './log/log.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
export interface IValidationErrorInfo {
    message: string;
    members: string[];
}
export interface IErrorInfo {
    code: number;
    message: string;
    details: string;
    validationErrors: IValidationErrorInfo[];
}
export interface IAjaxResponse {
    success: boolean;
    result?: any;
    targetUrl?: string;
    error?: IErrorInfo;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}
export declare class AbpHttpConfiguration {
    private _messageService;
    private _logService;
    constructor(_messageService: MessageService, _logService: LogService);
    defaultError: IErrorInfo;
    defaultError401: IErrorInfo;
    defaultError403: IErrorInfo;
    defaultError404: IErrorInfo;
    logError(error: IErrorInfo): void;
    showError(error: IErrorInfo): any;
    handleTargetUrl(targetUrl: string): void;
    handleUnAuthorizedRequest(messagePromise: any, targetUrl?: string): void;
    handleNonAbpErrorResponse(response: HttpResponse<any>): void;
    handleAbpResponse(response: HttpResponse<any>, ajaxResponse: IAjaxResponse): HttpResponse<any>;
    getAbpAjaxResponseOrNull(response: HttpResponse<any>): IAjaxResponse | null;
    handleResponse(response: HttpResponse<any>): HttpResponse<any>;
    blobToText(blob: any): Observable<string>;
}
export declare class AbpHttpInterceptor implements HttpInterceptor {
    protected configuration: AbpHttpConfiguration;
    private _tokenService;
    private _utilsService;
    private _logService;
    constructor(configuration: AbpHttpConfiguration);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected normalizeRequestHeaders(request: HttpRequest<any>): HttpRequest<any>;
    protected addXRequestedWithHeader(headers: HttpHeaders): HttpHeaders;
    protected addAspNetCoreCultureHeader(headers: HttpHeaders): HttpHeaders;
    protected addAcceptLanguageHeader(headers: HttpHeaders): HttpHeaders;
    protected addTenantIdHeader(headers: HttpHeaders): HttpHeaders;
    protected addAuthorizationHeaders(headers: HttpHeaders): HttpHeaders;
    protected handleSuccessResponse(event: HttpEvent<any>, interceptObservable: Subject<HttpEvent<any>>): void;
    protected handleErrorResponse(error: any, interceptObservable: Subject<HttpEvent<any>>): Observable<any>;
    private itemExists<T>(items, predicate);
}
