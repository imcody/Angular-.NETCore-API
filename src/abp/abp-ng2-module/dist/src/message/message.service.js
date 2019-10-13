import { Injectable } from '@angular/core';
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
        { type: Injectable },
    ];
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=message.service.js.map