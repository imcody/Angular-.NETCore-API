import { Injectable } from '@angular/core';
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
        { type: Injectable },
    ];
    return TokenService;
}());
export { TokenService };
//# sourceMappingURL=token.service.js.map