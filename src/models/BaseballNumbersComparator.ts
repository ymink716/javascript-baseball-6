import { Comparator } from "./interface/Comparator";
import BaseballNumbers from "./vo/BaseballNumbers";

class BaseballNumbersComparator implements Comparator {
  public countStrike(guess: BaseballNumbers, answer: BaseballNumbers): number {
    const guessedNumbers = guess.getBaseballNumbers();
    const answerNumbers = answer.getBaseballNumbers();
    
    let strike = 0;
    guessedNumbers.forEach((num, index) => {
      if (num.isEqual(answerNumbers[index])) {
        strike += 1;
      }
    });

    return strike;
  }

  public countIncludedNumber(guess: BaseballNumbers, answer: BaseballNumbers): number {
    const guessedNumbers = guess.getBaseballNumbers();
    
    let count = 0;
    guessedNumbers.forEach((num) => {
      if (answer.isIncluded(num)) {
        count += 1;
      }
    });

    return count;
  }
}

export default BaseballNumbersComparator;