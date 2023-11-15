"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../common/constants");
var BaseballNumbers = /** @class */ (function () {
    function BaseballNumbers(numbers) {
        if (!this.validate(numbers)) {
            throw Error(constants_1.ERROR_MESSAGE);
        }
        this.numbers = numbers.map(Number);
    }
    BaseballNumbers.prototype.validate = function (numbers) {
        if (this.isThreeLetters(numbers) && this.isNaturalNumber(numbers) && this.isUnique(numbers)) {
            return true;
        }
        return false;
    };
    BaseballNumbers.prototype.isThreeLetters = function (numbers) {
        return numbers.length === 3;
    };
    BaseballNumbers.prototype.isNaturalNumber = function (numbers) {
        var validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        numbers.forEach(function (num) {
            if (!validNumbers.includes(Number(num))) {
                return false;
            }
        });
        return true;
    };
    BaseballNumbers.prototype.isUnique = function (numbers) {
        var first = numbers[0], second = numbers[1], third = numbers[2];
        if (first === second || second === third || third === first) {
            return false;
        }
        return true;
    };
    BaseballNumbers.prototype.getNumbers = function () {
        return this.numbers;
    };
    return BaseballNumbers;
}());
exports.default = BaseballNumbers;
