import BaseballNumber from './vo/baseballNumber';
import BaseballNumbers from './vo/BaseballNumbers';
import { Randoms } from './interface/Randoms';

const RANDOM_NUMBER_START = 1;
const RANDOM_NUMBER_END = 9;
const RANDOM_NUMBER_COUNT = 3;

class BaseballNumbersGenerator {  
  private readonly randoms: Randoms;

  constructor(randoms: Randoms) {
    this.randoms = randoms;
  }

  public generate(): BaseballNumbers {
    const numbers = this.generateRandomNumbers();
    const baseballNumbers = this.convertBaseballNumbers(numbers);

    return baseballNumbers;
  }

  private generateRandomNumbers(): number[] {
    const numbers = [];

    while (numbers.length < RANDOM_NUMBER_COUNT) {
      const randomNumber = this.randoms.generate(
        RANDOM_NUMBER_START, RANDOM_NUMBER_END
      );
      
      if (this.isNotIncluded(numbers, randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    return numbers;
  }

  private isNotIncluded(numbers: number[], num: number): boolean {
    return !numbers.includes(num);
  }

  private convertBaseballNumbers(numbers: number[]): BaseballNumbers {
    const result = [];

    numbers.forEach((num) => {
      result.push(new BaseballNumber(num));
    })

    return new BaseballNumbers(result);
  }
}

export default BaseballNumbersGenerator;
