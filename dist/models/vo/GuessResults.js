"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuessResults = /** @class */ (function () {
    function GuessResults(strikes, balls) {
        this.strikes = strikes;
        this.balls = balls;
    }
    GuessResults.prototype.isAnswer = function () {
        return this.strikes === 3 && this.balls === 0;
    };
    GuessResults.prototype.showStrikesAndBalls = function () {
        return {
            strikes: this.strikes,
            balls: this.balls,
        };
    };
    return GuessResults;
}());
exports.default = GuessResults;
