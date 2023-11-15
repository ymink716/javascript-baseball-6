"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseballNumbers_1 = require("./vo/BaseballNumbers");
var Guess = /** @class */ (function () {
    function Guess(numbers) {
        this.numbers = new BaseballNumbers_1.default(numbers);
    }
    Guess.prototype.getNumbers = function () {
        return this.numbers.getNumbers();
    };
    return Guess;
}());
exports.default = Guess;
