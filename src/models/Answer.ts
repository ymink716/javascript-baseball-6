import BaseballNumbersGenerator from './BaseballNumbersGenerator';
import BaseballNumbers from './vo/BaseballNumbers';

class Answer {
  private readonly baseballNumbersGenerator: BaseballNumbersGenerator; 
  private numbers: BaseballNumbers;

  constructor() {
    this.baseballNumbersGenerator = new BaseballNumbersGenerator();
    const numbers = this.baseballNumbersGenerator.generateRandomNumbers();
    this.numbers = new BaseballNumbers(numbers);
    //console.log(this.numbers);
  }

  public getNumbers() {
    return this.numbers.getNumbers();
  }
}

export default Answer;
