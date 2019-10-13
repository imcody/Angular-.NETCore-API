import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { MessageService } from './message/message.service';
import { LogService } from './log/log.service';
import { TokenService } from './auth/token.service';
import { UtilsService } from './utils/utils.service';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
var AbpHttpConfiguration = /** @class */ (function () {
    function AbpHttpConfiguration(_messageService, _logService) {
        this._messageService = _messageService;
        this._logService = _logService;
        this.defaultError = {
            message: 'An error has occurred!',
            details: 'Error details were not sent by server.'
        };
        this.defaultError401 = {
            message: 'You are not authenticated!',
            details: 'You should be authenticated (sign in) in order to perform this operation.'
        };
        this.defaultError403 = {
            message: 'You are not authorized!',
            details: 'You are not allowed to perform this operation.'
        };
        this.defaultError404 = {
            message: 'Resource not found!',
            details: 'The resource requested could not be found on the server.'
        };
    }
    AbpHttpConfiguration.prototype.logError = function (error) {
        this._logService.error(error);
    };
    AbpHttpConfiguration.prototype.showError = function (error) {
        if (error.details) {
            return this._messageService.error(error.details, error.message || this.defaultError.message);
        }
        else {
            return this._messageService.error(error.message || this.defaultError.message);
        }
    };
    AbpHttpConfiguration.prototype.handleTargetUrl = function (targetUrl) {
        if (!targetUrl) {
            location.href = '/';
        }
        else {
            location.href = targetUrl;
        }
    };
    AbpHttpConfiguration.prototype.handleUnAuthorizedRequest = function (messagePromise, targetUrl) {
        var _this = this;
        var self = this;
        if (messagePromise) {
            messagePromise.done(function () {
                _this.handleTargetUrl(targetUrl || '/');
            });
        }
        else {
            self.handleTargetUrl(targetUrl || '/');
        }
    };
    AbpHttpConfiguration.prototype.handleNonAbpErrorResponse = function (response) {
        var self = this;
        switch (response.status) {
            case 401:
                self.handleUnAuthorizedRequest(self.showError(self.defaultError401), '/');
                break;
            case 403:
                self.showError(self.defaultError403);
                break;
            case 404:
                self.showError(self.defaultError404);
                break;
            default:
                self.showError(self.defaultError);
                break;
        }
    };
    AbpHttpConfiguration.prototype.handleAbpResponse = function (response, ajaxResponse) {
        var newResponse;
        if (ajaxResponse.success) {
            newResponse = response.clone({
                body: ajaxResponse.result
            });
            if (ajaxResponse.targetUrl) {
                this.handleTargetUrl(ajaxResponse.targetUrl);
                ;
            }
        }
        else {
            newResponse = response.clone({
                body: ajaxResponse.result
            });
            if (!ajaxResponse.error) {
                ajaxResponse.error = this.defaultError;
            }
            this.logError(ajaxResponse.error);
            this.showError(ajaxResponse.error);
            if (response.status === 401) {
                this.handleUnAuthorizedRequest(null, ajaxResponse.targetUrl);
            }
        }
        return newResponse;
    };
    AbpHttpConfiguration.prototype.getAbpAjaxResponseOrNull = function (response) {
        if (!response || !response.headers) {
            return null;
        }
        var contentType = response.headers.get('Content-Type');
        if (!contentType) {
            this._logService.warn('Content-Type is not sent!');
            return null;
        }
        if (contentType.indexOf("application/json") < 0) {
            this._logService.warn('Content-Type is not application/json: ' + contentType);
            return null;
        }
        var responseObj = JSON.parse(JSON.stringify(response.body));
        if (!responseObj.__abp) {
            return null;
        }
        return responseObj;
    };
    AbpHttpConfiguration.prototype.handleResponse = function (response) {
        var ajaxResponse = this.getAbpAjaxResponseOrNull(response);
        if (ajaxResponse == null) {
            return response;
        }
        return this.handleAbpResponse(response, ajaxResponse);
    };
    AbpHttpConfiguration.prototype.blobToText = function (blob) {
        return new Observable(function (observer) {
            if (!blob) {
                observer.next("");
                observer.complete();
            }
            else {
                var reader = new FileReader();
                reader.onload = function () {
                    observer.next(this.result);
                    observer.complete();
                };
                reader.readAsText(blob);
            }
        });
    };
    AbpHttpConfiguration.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AbpHttpConfiguration.ctorParameters = function () { return [
        { type: MessageService },
        { type: LogService }
    ]; };
    return AbpHttpConfiguration;
}());
export { AbpHttpConfiguration };
var AbpHttpInterceptor = /** @class */ (function () {
    function AbpHttpInterceptor(configuration) {
        this._tokenService = new TokenService();
        this._utilsService = new UtilsService();
        this._logService = new LogService();
        this.configuration = configuration;
    }
    AbpHttpInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var interceptObservable = new Subject();
        var modifiedRequest = this.normalizeRequestHeaders(request);
        next.handle(modifiedRequest)
            .subscribe(function (event) {
            _this.handleSuccessResponse(event, interceptObservable);
        }, function (error) {
            return _this.handleErrorResponse(error, interceptObservable);
        });
        return interceptObservable;
    };
    AbpHttpInterceptor.prototype.normalizeRequestHeaders = function (request) {
        var modifiedHeaders = new HttpHeaders();
        modifiedHeaders = request.headers.set("Pragma", "no-cache")
            .set("Cache-Control", "no-cache")
            .set("Expires", "Sat, 01 Jan 2000 00:00:00 GMT");
        modifiedHeaders = this.addXRequestedWithHeader(modifiedHeaders);
        modifiedHeaders = this.addAuthorizationHeaders(modifiedHeaders);
        modifiedHeaders = this.addAspNetCoreCultureHeader(modifiedHeaders);
        modifiedHeaders = this.addAcceptLanguageHeader(modifiedHeaders);
        modifiedHeaders = this.addTenantIdHeader(modifiedHeaders);
        return request.clone({
            headers: modifiedHeaders
        });
    };
    AbpHttpInterceptor.prototype.addXRequestedWithHeader = function (headers) {
        if (headers) {
            headers = headers.set('X-Requested-With', 'XMLHttpRequest');
        }
        return headers;
    };
    AbpHttpInterceptor.prototype.addAspNetCoreCultureHeader = function (headers) {
        var cookieLangValue = this._utilsService.getCookieValue("Abp.Localization.CultureName");
        if (cookieLangValue && headers && !headers.has('.AspNetCore.Culture')) {
            headers = headers.set('.AspNetCore.Culture', cookieLangValue);
        }
        return headers;
    };
    AbpHttpInterceptor.prototype.addAcceptLanguageHeader = function (headers) {
        var cookieLangValue = this._utilsService.getCookieValue("Abp.Localization.CultureName");
        if (cookieLangValue && headers && !headers.has('Accept-Language')) {
            headers = headers.set('Accept-Language', cookieLangValue);
        }
        return headers;
    };
    AbpHttpInterceptor.prototype.addTenantIdHeader = function (headers) {
        var cookieTenantIdValue = this._utilsService.getCookieValue('Abp.TenantId');
        if (cookieTenantIdValue && headers && !headers.has('Abp.TenantId')) {
            headers = headers.set('Abp.TenantId', cookieTenantIdValue);
        }
        return headers;
    };
    AbpHttpInterceptor.prototype.addAuthorizationHeaders = function (headers) {
        var authorizationHeaders = headers ? headers.getAll('Authorization') : null;
        if (!authorizationHeaders) {
            authorizationHeaders = [];
        }
        if (!this.itemExists(authorizationHeaders, function (item) { return item.indexOf('Bearer ') == 0; })) {
            var token = this._tokenService.getToken();
            if (headers && token) {
                headers = headers.set('Authorization', 'Bearer ' + token);
            }
        }
        return headers;
    };
    AbpHttpInterceptor.prototype.handleSuccessResponse = function (event, interceptObservable) {
        var self = this;
        if (event instanceof HttpResponse) {
            if (event.body instanceof Blob && event.body.type && event.body.type.indexOf("application/json") >= 0) {
                var clonedResponse = event.clone();
                self.configuration.blobToText(event.body).subscribe(function (json) {
                    var responseBody = json == "null" ? {} : JSON.parse(json);
                    var modifiedResponse = self.configuration.handleResponse(event.clone({
                        body: responseBody
                    }));
                    interceptObservable.next(modifiedResponse.clone({
                        body: new Blob([JSON.stringify(modifiedResponse.body)], { type: 'application/json' })
                    }));
                    interceptObservable.complete();
                });
            }
            else {
                interceptObservable.next(event);
                interceptObservable.complete();
            }
        }
    };
    AbpHttpInterceptor.prototype.handleErrorResponse = function (error, interceptObservable) {
        var _this = this;
        var errorObservable = new Subject();
        if (!(error.error instanceof Blob)) {
            interceptObservable.error(error);
            interceptObservable.complete();
            return of({});
        }
        this.configuration.blobToText(error.error).subscribe(function (json) {
            var errorBody = (json == "" || json == "null") ? {} : JSON.parse(json);
            var errorResponse = new HttpResponse({
                headers: error.headers,
                body: errorBody
            });
            var ajaxResponse = _this.configuration.getAbpAjaxResponseOrNull(errorResponse);
            if (ajaxResponse != null) {
                _this.configuration.handleAbpResponse(errorResponse, ajaxResponse);
            }
            else {
                _this.configuration.handleNonAbpErrorResponse(errorResponse);
            }
            errorObservable.complete();
            //prettify error object.
            error.error = errorBody;
            interceptObservable.error(error);
            interceptObservable.complete();
        });
        return errorObservable;
    };
    AbpHttpInterceptor.prototype.itemExists = function (items, predicate) {
        for (var i = 0; i < items.length; i++) {
            if (predicate(items[i])) {
                return true;
            }
        }
        return false;
    };
    AbpHttpInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AbpHttpInterceptor.ctorParameters = function () { return [
        { type: AbpHttpConfiguration }
    ]; };
    return AbpHttpInterceptor;
}());
export { AbpHttpInterceptor };
//# sourceMappingURL=abpHttpInterceptor.js.map