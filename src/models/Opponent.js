import OpponentConsoleHelper from '../utils/OpponentConsoleHelper.js';
import RandomNumberHelper from '../utils/RandomNumberHelper.js';
import { ERROR_MESSAGE } from '../common/constants.js';

class Opponent {
  #randomNumberHelper = new RandomNumberHelper(); 
  #answerNumbers = [];


  async prepareAnswerNumbers() {
    const numbers = this.#randomNumberHelper.generateRandomNumbers(1, 9, 3);
    this.#answerNumbers = [ ...numbers ];
    console.log(this.#answerNumbers);
  }

  async compareToAnswers(guessedNumbers) {
    let strikes = 0;
    let balls = 0;

    guessedNumbers.forEach((number, index) => {
      if (this.#isStrike(number, index)) {
        strikes += 1;
      }
      if (this.#isBall(number)) {
        balls += 1;
      }
    });

    return { strikes, balls };
  }

  #isStrike(guess, index) {
    return guess === this.answerNumbers[index];
  }

  #isBall(guess) {
    return this.answerNumbers.includes(guess);
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
