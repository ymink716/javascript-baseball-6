"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../common/constants");
var Host = /** @class */ (function () {
    function Host() {
    }
    Host.prototype.askRegame = function (choice) {
        if (!this.isStartOrQuitOptions(choice)) {
            throw Error(constants_1.ERROR_MESSAGE);
        }
        if (choice === constants_1.CHOICE_START_NEW_GAME) {
            return true;
        }
        return false;
    };
    Host.prototype.isStartOrQuitOptions = function (input) {
        return [constants_1.CHOICE_START_NEW_GAME, constants_1.CHOICE_QUIT].includes(input);
    };
    return Host;
}());
exports.default = Host;
