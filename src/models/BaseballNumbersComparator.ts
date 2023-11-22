import BaseballNumbers from "./vo/BaseballNumbers";

class BaseballNumbersComparator {
  public countStrikes(guess: BaseballNumbers, answer: BaseballNumbers): number {
    const guessedNumbers = guess.getBaseballNumbers();
    const answerNumbers = answer.getBaseballNumbers();
    
    let strikes = 0;
    guessedNumbers.forEach((num, index) => {
      if (num.isEqual(answerNumbers[index])) {
        strikes += 1;
      }
    });

    return strikes;
  }

  public countIncludedNumbers(guess: BaseballNumbers, answer: BaseballNumbers): number {
    const guessedNumbers = guess.getBaseballNumbers();
    
    let counts = 0;
    guessedNumbers.forEach((num) => {
      if (answer.isIncluded(num)) {
        counts += 1;
      }
    });
    console.log(counts)
    return counts;
  }
}

export default BaseballNumbersComparator;