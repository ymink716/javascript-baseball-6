import { Random } from '@woowacourse/mission-utils';

class RandomNumberHelper {
  generateRandomNumbers(start, end, count) {
    const numbers = [];

    while (numbers.length < count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }
}

export default RandomNumberHelper;
