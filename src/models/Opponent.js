import RandomNumberGenerator from '../utils/RandomNumberGenerator.js';
import AnswerNumbers from './vo/AnswerNumbers.js';

class Opponent {
  #randomNumberGenerator = new RandomNumberGenerator(); 
  #answerNumbers;

  async prepareAnswerNumbers() {
    const numbers = this.#randomNumberGenerator.generateRandomNumbers();
    this.#answerNumbers = new AnswerNumbers(numbers);
    console.log(this.#answerNumbers.getAnswerNumbers());
  }

  async compareToAnswers(guessedNumbers) {
    let strikes = 0;
    let balls = 0;

    guessedNumbers.forEach((number, index) => {
      if (this.#isStrike(number, index)) {
        strikes += 1;
      }
      if (this.#isBall(number, index)) {
        balls += 1;
      }
    });

    return { strikes, balls };
  }

  #isStrike(guess, index) {
    return guess === this.#answerNumbers.getAnswerNumbers()[index];
  }

  #isBall(guess, index) {
    return guess !== this.#answerNumbers.getAnswerNumbers()[index] 
      && this.#answerNumbers.getAnswerNumbers().includes(guess);
  }
}

export default Opponent;
