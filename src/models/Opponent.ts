import RandomNumberGenerator from '../utils/RandomNumberGenerator';
import AnswerNumbers from './vo/AnswerNumbers';

class Opponent {
  private readonly randomNumberGenerator = new RandomNumberGenerator(); 
  private answerNumbers: AnswerNumbers;

  async prepareAnswerNumbers(): Promise<void> {
    const numbers = this.randomNumberGenerator.generateRandomNumbers();
    this.answerNumbers = new AnswerNumbers(numbers);
    console.log(this.answerNumbers.getAnswerNumbers());
  }

  async compareToAnswers(guessedNumbers) {
    const strikes = this.countStrikes(guessedNumbers);
    const balls = this.countBalls(guessedNumbers);

    return { strikes, balls };
  }

  private countStrikes(numbers) {
    let strikes = 0;

    numbers.forEach((number, index) => {
      if (this.isStrike(number, index)) {
        strikes += 1;
      }
    });

    return strikes;
  }

  private countBalls(numbers) {
    let balls = 0;

    numbers.forEach((number, index) => {
      if (this.isBall(number, index)) {
        balls += 1;
      }
    });
    
    return balls;
  }

  private isStrike(guess, index) {
    return guess === this.answerNumbers.getAnswerNumbers()[index];
  }

  private isBall(guess, index) {
    return guess !== this.answerNumbers.getAnswerNumbers()[index] 
      && this.answerNumbers.getAnswerNumbers().includes(guess);
  }
}

export default Opponent;
