import BaseballNumbers from './vo/BaseballNumbers';

class Guess {
  private numbers: BaseballNumbers;
  
  constructor(numbers: number[]) {
    this.numbers = new BaseballNumbers(numbers);
  }

  public getNumbers(): number[] {
    return this.numbers.getNumbers();
  }
}

export default Guess;