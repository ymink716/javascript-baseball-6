import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_START, RANDOM_NUMBER_END, RANDOM_NUMBER_COUNT } from '../common/constants.js';

class RandomNumberGenerator {
  #start = RANDOM_NUMBER_START;
  #end = RANDOM_NUMBER_END;
  #count = RANDOM_NUMBER_COUNT;

  generateRandomNumbers() {
    const numbers = [];

    while (numbers.length < this.#count) {
      const number = Random.pickNumberInRange(this.#start, this.#end);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }
}

export default RandomNumberGenerator;
