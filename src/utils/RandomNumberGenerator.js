import { Random } from '@woowacourse/mission-utils';
import { COUNT, END_NUMBER, START_NUMBER } from '../common/constants.js';

class RandomNumberGenerator {
  #start = START_NUMBER;
  #end = END_NUMBER;
  #count = COUNT;

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
