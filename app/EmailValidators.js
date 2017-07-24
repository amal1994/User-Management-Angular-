"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.validEmail = function (formControl) {
        var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(formControl.value)) {
            return null;
        }
        return { invalidEmail: true };
    };
    return EmailValidators;
}());
exports.EmailValidators = EmailValidators;
//# sourceMappingURL=EmailValidators.js.map