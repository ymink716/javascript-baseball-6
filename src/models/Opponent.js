import OpponentConsoleHelper from '../utils/OpponentConsoleHelper.js';
import RandomNumberHelper from '../utils/RandomNumberHelper.js';
import { ERROR_MESSAGE } from '../common/constants.js';

class Opponent {
  constructor() {
    this.consoleHelper = new OpponentConsoleHelper();
    this.randomNumberHelper = new RandomNumberHelper(); 
    this.answerNumbers = [];
  }

  async prepareAnswerNumbers() {
    const numbers = this.randomNumberHelper.generateRandomNumbers(1, 9, 3);
    this.answerNumbers = [...numbers];
    console.log(this.answerNumbers);
  }

  async compareToAnswers(guessedNumbers) {
    let strike = 0;
    let ball = 0;

    guessedNumbers.forEach((number, index) => {
      if (this.isStrike(number, index)) {
        strike += 1;
      }
      if (this.isBall(number)) {
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

  async showComparedResult(strike, ball) {
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

    if (!this.isStartOrQuitOptions(choice)) {
      throw Error(ERROR_MESSAGE);
    }

    return choice;
  }

  isStartOrQuitOptions(input) {
    return ['1', '2'].includes(input);
  }
}

export default Opponent;
