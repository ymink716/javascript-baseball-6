"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../common/constants");
var BaseballNumbersComparator_1 = require("./BaseballNumbersComparator");
var Referee = /** @class */ (function () {
    function Referee() {
        this.comparator = new BaseballNumbersComparator_1.default();
    }
    Referee.prototype.judge = function (guessdNumbers, answerNumbers) {
        var strikes = this.comparator.countStrikes(guessdNumbers, answerNumbers);
        var balls = this.comparator.countBalls(guessdNumbers, answerNumbers);
        if (this.isNothing(strikes, balls)) {
            return constants_1.NOTHING;
        }
        if (this.isThreeStrikes(strikes, balls)) {
            return constants_1.THREE_STRIKE;
        }
        return "".concat(balls, "\uBCFC ").concat(strikes, "\uC2A4\uD2B8\uB77C\uC774\uD06C");
    };
    Referee.prototype.isNothing = function (strikes, balls) {
        return strikes === 0 && balls === 0;
    };
    Referee.prototype.isThreeStrikes = function (strikes, balls) {
        return strikes === 3 && balls === 0;
    };
    return Referee;
}());
exports.default = Referee;
