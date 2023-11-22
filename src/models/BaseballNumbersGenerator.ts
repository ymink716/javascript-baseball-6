import { Random } from '@woowacourse/mission-utils';
import BaseballNumber from './vo/baseballNumber';
import BaseballNumbers from './vo/BaseballNumbers';

class BaseballNumbersGenerator {
  private readonly RANDOM_NUMBER_START = 1;
  private readonly RANDOM_NUMBER_END = 9;
  private readonly RANDOM_NUMBER_COUNT = 3;

  public generate(): BaseballNumbers {
    const numbers = [];

    while (numbers.length < this.RANDOM_NUMBER_COUNT) {
      const randomNumber = Random.pickNumberInRange(this.RANDOM_NUMBER_START, this.RANDOM_NUMBER_END);
      
      if (!this.isIncluded(numbers, randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    const baseballNumbers = [];
    numbers.forEach((num) => {
      baseballNumbers.push(new BaseballNumber(num));
    })

    return new BaseballNumbers(baseballNumbers);
  }

  private isIncluded(numbers: number[], num: number): boolean {
    return numbers.includes(num);
  }
}

export default BaseballNumbersGenerator;
