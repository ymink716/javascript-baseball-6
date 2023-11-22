"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseballNumbersComparator = /** @class */ (function () {
    function BaseballNumbersComparator() {
    }
    BaseballNumbersComparator.prototype.countStrikes = function (guess, answer) {
        var guessedNumbers = guess.getBaseballNumbers();
        var answerNumbers = answer.getBaseballNumbers();
        var strikes = 0;
        guessedNumbers.forEach(function (num, index) {
            if (num.isEqual(answerNumbers[index])) {
                strikes += 1;
            }
        });
        return strikes;
    };
    BaseballNumbersComparator.prototype.countIncludedNumbers = function (guess, answer) {
        var guessedNumbers = guess.getBaseballNumbers();
        var counts = 0;
        guessedNumbers.forEach(function (num) {
            if (answer.isIncluded(num)) {
                counts += 1;
            }
        });
        console.log(counts);
        return counts;
    };
    return BaseballNumbersComparator;
}());
exports.default = BaseballNumbersComparator;
