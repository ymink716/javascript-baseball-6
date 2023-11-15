"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseballNumbersComparator = /** @class */ (function () {
    function BaseballNumbersComparator() {
    }
    BaseballNumbersComparator.prototype.countStrikes = function (guessedNumbers, answerNumbers) {
        var strikes = 0;
        guessedNumbers.forEach(function (guess, index) {
            if (guess === answerNumbers[index]) {
                strikes += 1;
            }
        });
        return strikes;
    };
    BaseballNumbersComparator.prototype.countBalls = function (guessedNumbers, answerNumbers) {
        var balls = 0;
        guessedNumbers.forEach(function (guess, index) {
            if (guess !== answerNumbers[index] && answerNumbers.includes(guess)) {
                balls += 1;
            }
        });
        return balls;
    };
    return BaseballNumbersComparator;
}());
exports.default = BaseballNumbersComparator;
