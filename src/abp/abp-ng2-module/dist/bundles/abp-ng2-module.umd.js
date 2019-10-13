(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', '@angular/common/http'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.abpModule = global.ng.abpModule || {}),global.ng.core,global.rxjs,global._angular_common_http));
}(this, (function (exports,_angular_core,rxjs,_angular_common_http) { 'use strict';

var AbpSessionService = /** @class */ (function () {
    function AbpSessionService() {
    }
    Object.defineProperty(AbpSessionService.prototype, "userId", {
        get: function () {
            return abp.session.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "tenantId", {
        get: function () {
            return abp.session.tenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "impersonatorUserId", {
        get: function () {
            return abp.session.impersonatorUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "impersonatorTenantId", {
        get: function () {
            return abp.session.impersonatorTenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "multiTenancySide", {
        get: function () {
            return abp.session.multiTenancySide;
        },
        enumerable: true,
        configurable: true
    });
    AbpSessionService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return AbpSessionService;
}());

var PermissionCheckerService = /** @class */ (function () {
    function PermissionCheckerService() {
    }
    PermissionCheckerService.prototype.isGranted = function (permissionName) {
        return abp.auth.isGranted(permissionName);
    };
    PermissionCheckerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return PermissionCheckerService;
}());

var FeatureCheckerService = /** @class */ (function () {
    function FeatureCheckerService() {
    }
    FeatureCheckerService.prototype.get = function (featureName) {
        return abp.features.get(featureName);
    };
    FeatureCheckerService.prototype.getValue = function (featureName) {
        return abp.features.getValue(featureName);
    };
    FeatureCheckerService.prototype.isEnabled = function (featureName) {
        return abp.features.isEnabled(featureName);
    };
    FeatureCheckerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return FeatureCheckerService;
}());

var LocalizationService = /** @class */ (function () {
    function LocalizationService() {
    }
    Object.defineProperty(LocalizationService.prototype, "languages", {
        get: function () {
            return abp.localization.languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationService.prototype, "currentLanguage", {
        get: function () {
            return abp.localization.currentLanguage;
        },
        enumerable: true,
        configurable: true
    });
    LocalizationService.prototype.localize = function (key, sourceName) {
        return abp.localization.localize(key, sourceName);
    };
    LocalizationService.prototype.getSource = function (sourceName) {
        return abp.localization.getSource(sourceName);
    };
    LocalizationService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return LocalizationService;
}());

var SettingService = /** @class */ (function () {
    function SettingService() {
    }
    SettingService.prototype.get = function (name) {
        return abp.setting.get(name);
    };
    SettingService.prototype.getBoolean = function (name) {
        return abp.setting.getBoolean(name);
    };
    SettingService.prototype.getInt = function (name) {
        return abp.setting.getInt(name);
    };
    SettingService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return SettingService;
}());

var NotifyService = /** @class */ (function () {
    function NotifyService() {
    }
    NotifyService.prototype.info = function (message, title, options) {
        abp.notify.info(message, title, options);
    };
    NotifyService.prototype.success = function (message, title, options) {
        abp.notify.success(message, title, options);
    };
    NotifyService.prototype.warn = function (message, title, options) {
        abp.notify.warn(message, title, options);
    };
    NotifyService.prototype.error = function (message, title, options) {
        abp.notify.error(message, title, options);
    };
    NotifyService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return NotifyService;
}());

var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    MessageService.prototype.info = function (message, title, isHtml) {
        return abp.message.info(message, title, isHtml);
    };
    MessageService.prototype.success = function (message, title, isHtml) {
        return abp.message.success(message, title, isHtml);
    };
    MessageService.prototype.warn = function (message, title, isHtml) {
        return abp.message.warn(message, title, isHtml);
    };
    MessageService.prototype.error = function (message, title, isHtml) {
        return abp.message.error(message, title, isHtml);
    };
    MessageService.prototype.confirm = function (message, titleOrCallBack, callback, isHtml) {
        if (typeof titleOrCallBack == 'string') {
            return abp.message.confirm(message, titleOrCallBack, callback, isHtml);
        }
        else {
            return abp.message.confirm(message, undefined, titleOrCallBack, isHtml);
        }
    };
    MessageService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return MessageService;
}());

var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.debug = function (logObject) {
        abp.log.debug(logObject);
    };
    LogService.prototype.info = function (logObject) {
        abp.log.info(logObject);
    };
    LogService.prototype.warn = function (logObject) {
        abp.log.warn(logObject);
    };
    LogService.prototype.error = function (logObject) {
        abp.log.error(logObject);
    };
    LogService.prototype.fatal = function (logObject) {
        abp.log.fatal(logObject);
    };
    LogService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return LogService;
}());

var AbpMultiTenancyService = /** @class */ (function () {
    function AbpMultiTenancyService() {
    }
    Object.defineProperty(AbpMultiTenancyService.prototype, "isEnabled", {
        get: function () {
            return abp.multiTenancy.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbpMultiTenancyService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return AbpMultiTenancyService;
}());

var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.getToken = function () {
        return abp.auth.getToken();
    };
    TokenService.prototype.getTokenCookieName = function () {
        return abp.auth.tokenCookieName;
    };
    TokenService.prototype.clearToken = function () {
        abp.auth.clearToken();
    };
    TokenService.prototype.setToken = function (authToken, expireDate) {
        abp.auth.setToken(authToken, expireDate);
    };
    TokenService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return TokenService;
}());

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getCookieValue = function (key) {
        return abp.utils.getCookieValue(key);
    };
    UtilsService.prototype.setCookieValue = function (key, value, expireDate, path) {
        abp.utils.setCookieValue(key, value, expireDate, path);
    };
    UtilsService.prototype.deleteCookie = function (key, path) {
        abp.utils.deleteCookie(key, path);
    };
    UtilsService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return UtilsService;
}());

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
        return new rxjs.Observable(function (observer) {
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    AbpHttpConfiguration.ctorParameters = function () { return [
        { type: MessageService },
        { type: LogService }
    ]; };
    return AbpHttpConfiguration;
}());

var AbpUserConfigurationService = /** @class */ (function () {
    function AbpUserConfigurationService(_http) {
        this._http = _http;
    }
    AbpUserConfigurationService.prototype.initialize = function () {
        this._http.get('/AbpUserConfiguration/GetAll')
            .subscribe(function (result) {
            jQuery.extend(true, abp, JSON.parse(JSON.stringify(result)));
        });
    };
    AbpUserConfigurationService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    AbpUserConfigurationService.ctorParameters = function () { return [
        { type: _angular_common_http.HttpClient }
    ]; };
    return AbpUserConfigurationService;
}());

var AbpModule = /** @class */ (function () {
    function AbpModule() {
    }
    AbpModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [],
                    providers: [
                        AbpSessionService,
                        PermissionCheckerService,
                        FeatureCheckerService,
                        LocalizationService,
                        SettingService,
                        NotifyService,
                        MessageService,
                        LogService,
                        AbpMultiTenancyService,
                        AbpUserConfigurationService,
                        AbpHttpConfiguration,
                        TokenService,
                        UtilsService
                    ]
                },] },
    ];
    return AbpModule;
}());

/**
 * @module
 * @description
 * Entry point for all public APIs of the Angular Module
 */

exports.AbpModule = AbpModule;
exports.AbpUserConfigurationService = AbpUserConfigurationService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
