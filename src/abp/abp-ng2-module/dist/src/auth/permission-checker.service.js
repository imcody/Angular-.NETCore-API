import { Injectable } from '@angular/core';
var PermissionCheckerService = /** @class */ (function () {
    function PermissionCheckerService() {
    }
    PermissionCheckerService.prototype.isGranted = function (permissionName) {
        return abp.auth.isGranted(permissionName);
    };
    PermissionCheckerService.decorators = [
        { type: Injectable },
    ];
    return PermissionCheckerService;
}());
export { PermissionCheckerService };
//# sourceMappingURL=permission-checker.service.js.map