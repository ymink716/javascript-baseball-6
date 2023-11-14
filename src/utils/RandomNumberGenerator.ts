import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_START, RANDOM_NUMBER_END, RANDOM_NUMBER_COUNT } from '../common/constants.js';

class RandomNumberGenerator {
  private readonly RANDOM_NUMBER_START = RANDOM_NUMBER_START;
  private readonly RANDOM_NUMBER_END = RANDOM_NUMBER_END;
  private readonly RANDOM_NUMBER_COUNT = RANDOM_NUMBER_COUNT;

  generateRandomNumbers(): number[] {
    const numbers = [];

    while (numbers.length < this.RANDOM_NUMBER_COUNT) {
      const number = Random.pickNumberInRange(this.RANDOM_NUMBER_START, this.RANDOM_NUMBER_END);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }
}

export default RandomNumberGenerator;
