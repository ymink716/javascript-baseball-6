"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseballNumbersGenerator_1 = require("./BaseballNumbersGenerator");
var BaseballNumbers_1 = require("./vo/BaseballNumbers");
var Answer = /** @class */ (function () {
    function Answer() {
        this.baseballNumbersGenerator = new BaseballNumbersGenerator_1.default();
        var numbers = this.baseballNumbersGenerator.generateRandomNumbers();
        this.numbers = new BaseballNumbers_1.default(numbers);
        //console.log(this.numbers);
    }
    Answer.prototype.getNumbers = function () {
        return this.numbers.getNumbers();
    };
    return Answer;
}());
exports.default = Answer;
