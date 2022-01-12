"use strict";
var Validations;
(function (Validations) {
    Validations.validate = (text) => {
        if (text.length > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    const validateDate = (fecha) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validate('Wanda'));
//# sourceMappingURL=main.js.map