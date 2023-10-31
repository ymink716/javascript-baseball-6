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

  showComparedResult(strike, ball) {
    if (this.isNothing(strike, ball)) {
      this.consoleHelper.printNothing();
    } else if (this.isThreeStrikes(strike, ball)) {
      this.consoleHelper.printThreeStrikes();
    } else {
      this.consoleHelper.printBallAndStrike(ball, strike);
    }
  }

  isNothing(strike, ball) {
    return strike === 0 && ball === 0;
  }

  isThreeStrikes(strike, ball) {
    return strike === 3 && ball === 0;
  }

  async askStartNewGameOrQuit() {
    const choice = await this.consoleHelper.askStartNewGameOrQuit();

    if (!this.isStartOrQuitOptions(input)) {
      throw Error('잘못된 값을 입력하셨습니다.');
    }

    return choice;
  }

  isStartOrQuitOptions(input) {
    return input in ['1', '2'];
  }
}

export default Opponent;
