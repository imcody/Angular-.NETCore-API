import { Injectable } from '@angular/core';
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
        { type: Injectable },
    ];
    return AbpMultiTenancyService;
}());
export { AbpMultiTenancyService };
//# sourceMappingURL=abp-multi-tenancy.service.js.map