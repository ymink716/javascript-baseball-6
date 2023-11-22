"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var IntroView_1 = require("../views/IntroView");
var GuessView_1 = require("../views/GuessView");
var RegameView_1 = require("../views/RegameView");
var Referee_1 = require("../models/Referee");
var ResultView_1 = require("../views/ResultView");
var Host_1 = require("../models/Host");
var BaseballNumbers_1 = require("../models/vo/BaseballNumbers");
var BaseballNumbersGenerator_1 = require("../models/BaseballNumbersGenerator");
var baseballNumber_1 = require("../models/vo/baseballNumber");
var constants_1 = require("../common/constants");
var BaseballGameController = /** @class */ (function () {
    function BaseballGameController() {
        this.introView = new IntroView_1.default();
        this.gusessView = new GuessView_1.default();
        this.regameView = new RegameView_1.default();
        this.baseballNumbersGenerator = new BaseballNumbersGenerator_1.default();
        this.referee = new Referee_1.default();
        this.host = new Host_1.default();
    }
    BaseballGameController.prototype.startBaseballGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.answer = this.baseballNumbersGenerator.generate();
                        console.log(this.answer);
                        return [4 /*yield*/, this.introView.announceBeginning()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseballGameController.prototype.guessNumbers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, guess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gusessView.guessNumbers()];
                    case 1:
                        input = _a.sent();
                        guess = input.map(function (num) { return new baseballNumber_1.default(num); });
                        this.guess = new BaseballNumbers_1.default(guess);
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseballGameController.prototype.judgeResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = this.referee.judge(this.guess, this.answer);
                this.resultView = new ResultView_1.default(result);
                this.resultView.printResult();
                return [2 /*return*/, result];
            });
        });
    };
    BaseballGameController.prototype.isAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = this.referee.judge(this.guess, this.answer);
                this.resultView = new ResultView_1.default(result);
                this.resultView.printResult();
                return [2 /*return*/, result === constants_1.THREE_STRIKE];
            });
        });
    };
    BaseballGameController.prototype.askRegame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var choice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.regameView.askRegame()];
                    case 1:
                        choice = _a.sent();
                        return [2 /*return*/, this.host.askRegame(choice)];
                }
            });
        });
    };
    BaseballGameController.prototype.prepareNewGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.answer = this.baseballNumbersGenerator.generate();
                return [2 /*return*/];
            });
        });
    };
    return BaseballGameController;
}());
exports.default = BaseballGameController;
