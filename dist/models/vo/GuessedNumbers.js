"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../common/constants");
var GuessedNumbers = /** @class */ (function () {
    function GuessedNumbers(numbers) {
        if (!this.isValidNumbers(numbers)) {
            throw Error(constants_1.ERROR_MESSAGE);
        }
        this.guessedNumbers = numbers.map(Number);
    }
    GuessedNumbers.prototype.isValidNumbers = function (numbers) {
        if (this.isThreeLetters(numbers) && this.isNaturalNumber(numbers) && this.isUnique(numbers)) {
            return true;
        }
        return false;
    };
    GuessedNumbers.prototype.isThreeLetters = function (numbers) {
        return numbers.length === 3;
    };
    GuessedNumbers.prototype.isNaturalNumber = function (numbers) {
        var validNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        numbers.forEach(function (num) {
            if (!validNumbers.includes(num)) {
                return false;
            }
        });
        return true;
    };
    GuessedNumbers.prototype.isUnique = function (numbers) {
        var first = numbers[0], second = numbers[1], third = numbers[2];
        if (first === second || second === third || third === first) {
            return false;
        }
        return true;
    };
    GuessedNumbers.prototype.getGuessedNumbers = function () {
        return this.guessedNumbers;
    };
    return GuessedNumbers;
}());
exports.default = GuessedNumbers;
