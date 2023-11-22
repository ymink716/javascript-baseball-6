"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../common/constants");
var BaseballNumbers = /** @class */ (function () {
    function BaseballNumbers(baseballNumbers) {
        if (!this.validate(baseballNumbers)) {
            throw Error(constants_1.ERROR_MESSAGE);
        }
        this.baseballNumbers = baseballNumbers;
    }
    BaseballNumbers.prototype.validate = function (baseballNumbers) {
        if (this.isThreeLetters(baseballNumbers) && this.isNotDuplicated(baseballNumbers)) {
            return true;
        }
        return false;
    };
    BaseballNumbers.prototype.isThreeLetters = function (baseballNumbers) {
        return baseballNumbers.length === 3;
    };
    BaseballNumbers.prototype.isNotDuplicated = function (baseballNumbers) {
        var first = baseballNumbers[0], second = baseballNumbers[1], third = baseballNumbers[2];
        if (first.isEqual(second) || second.isEqual(third) || third.isEqual(first)) {
            return false;
        }
        return true;
    };
    BaseballNumbers.prototype.getBaseballNumbers = function () {
        return this.baseballNumbers;
    };
    BaseballNumbers.prototype.isIncluded = function (other) {
        var result = false;
        for (var i = 0; i < this.baseballNumbers.length; i++) {
            if (this.baseballNumbers[i].isEqual(other)) {
                result = true;
                break;
            }
        }
        return result;
    };
    return BaseballNumbers;
}());
exports.default = BaseballNumbers;
