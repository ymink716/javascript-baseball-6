"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mission_utils_1 = require("@woowacourse/mission-utils");
var constants_1 = require("../common/constants");
var BaseballNumbersGenerator = /** @class */ (function () {
    function BaseballNumbersGenerator() {
        this.RANDOM_NUMBER_START = constants_1.RANDOM_NUMBER_START;
        this.RANDOM_NUMBER_END = constants_1.RANDOM_NUMBER_END;
        this.RANDOM_NUMBER_COUNT = constants_1.RANDOM_NUMBER_COUNT;
    }
    BaseballNumbersGenerator.prototype.generateRandomNumbers = function () {
        var numbers = [];
        while (numbers.length < this.RANDOM_NUMBER_COUNT) {
            var randomNumber = mission_utils_1.Random.pickNumberInRange(this.RANDOM_NUMBER_START, this.RANDOM_NUMBER_END);
            if (this.isIncluded(numbers, randomNumber)) {
                continue;
            }
            numbers.push(randomNumber);
        }
        return numbers;
    };
    BaseballNumbersGenerator.prototype.isIncluded = function (numbers, num) {
        return numbers.includes(num);
    };
    return BaseballNumbersGenerator;
}());
exports.default = BaseballNumbersGenerator;
