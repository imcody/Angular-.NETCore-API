import { Injectable } from '@angular/core';
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
        { type: Injectable },
    ];
    return NotifyService;
}());
export { NotifyService };
//# sourceMappingURL=notify.service.js.map