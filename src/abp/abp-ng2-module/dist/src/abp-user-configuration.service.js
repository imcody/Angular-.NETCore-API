import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        { type: Injectable },
    ];
    /** @nocollapse */
    AbpUserConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return AbpUserConfigurationService;
}());
export { AbpUserConfigurationService };
//# sourceMappingURL=abp-user-configuration.service.js.map