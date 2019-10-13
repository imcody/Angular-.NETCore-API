import { Injectable } from '@angular/core';
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
        { type: Injectable },
    ];
    return LogService;
}());
export { LogService };
//# sourceMappingURL=log.service.js.map