"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mission_utils_1 = require("@woowacourse/mission-utils");
var constants_js_1 = require("../common/constants.js");
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
        this.RANDOM_NUMBER_START = constants_js_1.RANDOM_NUMBER_START;
        this.RANDOM_NUMBER_END = constants_js_1.RANDOM_NUMBER_END;
        this.RANDOM_NUMBER_COUNT = constants_js_1.RANDOM_NUMBER_COUNT;
    }
    RandomNumberGenerator.prototype.generateRandomNumbers = function () {
        var numbers = [];
        while (numbers.length < this.RANDOM_NUMBER_COUNT) {
            var number = mission_utils_1.Random.pickNumberInRange(this.RANDOM_NUMBER_START, this.RANDOM_NUMBER_END);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
        return numbers;
    };
    return RandomNumberGenerator;
}());
exports.default = RandomNumberGenerator;
