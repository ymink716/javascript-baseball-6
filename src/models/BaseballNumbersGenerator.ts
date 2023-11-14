import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_START, RANDOM_NUMBER_END, RANDOM_NUMBER_COUNT } from '../common/constants';

class BaseballNumbersGenerator {
  private readonly RANDOM_NUMBER_START = RANDOM_NUMBER_START;
  private readonly RANDOM_NUMBER_END = RANDOM_NUMBER_END;
  private readonly RANDOM_NUMBER_COUNT = RANDOM_NUMBER_COUNT;

  generateRandomNumbers(): number[] {
    const numbers = [];

    while (numbers.length < this.RANDOM_NUMBER_COUNT) {
      const randomNumber = Random.pickNumberInRange(this.RANDOM_NUMBER_START, this.RANDOM_NUMBER_END);
      
      if (this.isIncluded(numbers, randomNumber)) {
        continue;
      }

      numbers.push(randomNumber);
    }

    return numbers;
  }

  private isIncluded(numbers: number[], num: number): boolean {
    return numbers.includes(num);
  }
}

export default BaseballNumbersGenerator;
