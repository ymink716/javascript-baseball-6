"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../common/constants");
var BaseballNumbersComparator_1 = require("./BaseballNumbersComparator");
var Referee = /** @class */ (function () {
    function Referee() {
        this.comparator = new BaseballNumbersComparator_1.default();
    }
    Referee.prototype.judge = function (guess, answer) {
        var strikes = this.comparator.countStrikes(guess, answer);
        var countIncluded = this.comparator.countIncludedNumbers(guess, answer);
        if (this.isNothing(strikes, countIncluded)) {
            return constants_1.NOTHING;
        }
        if (this.isThreeStrikes(strikes)) {
            return constants_1.THREE_STRIKE;
        }
        return "".concat(countIncluded - strikes, "\uBCFC ").concat(strikes, "\uC2A4\uD2B8\uB77C\uC774\uD06C");
    };
    Referee.prototype.isNothing = function (strikes, countIncluded) {
        return strikes === 0 && countIncluded === 0;
    };
    Referee.prototype.isThreeStrikes = function (strikes) {
        return strikes === 3;
    };
    return Referee;
}());
exports.default = Referee;
