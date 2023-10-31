import OpponentConsoleHelper from './utils/OpponentConsoleHelper.js';
import { Random } from '@woowacourse/mission-utils';

class Opponent {

  constructor() {
    this.consoleHelper = new OpponentConsoleHelper();
    this.answerNumbers = [];
  }

  showStartComment() {
    this.consoleHelper.printStartBaseballGame();
  }

  async prepareAnswerNumbers() {
    this.answerNumbers = await Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(this.answerNumbers);
  }

  compareToAnswers(guessedNumbers) {
    let strike = 0;
    let ball = 0;

    guessedNumbers.forEach((number, index) => {
      if (this.isStrike(number, index)) {
        strike += 1;
      } else if (this.isBall(number)) {
        ball += 1;
      }
    });

    return { strike, ball };
  }

  isStrike(guess, index) {
    return guess === this.answerNumbers[index];
  }

  isBall(guess) {
    return this.answerNumbers.includes(guess);
  }
}

export default Opponent;
