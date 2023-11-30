import { Comparator } from './interface/Comparator';
import BaseballNumbers from "./vo/BaseballNumbers";

const ANSWER_STRIKE_COUNT = 3;

class Referee {
  private readonly comparator: Comparator;

  constructor(comparator: Comparator) {
    this.comparator = comparator;
  }

  public judge(guess: BaseballNumbers, answer: BaseballNumbers): { strike: number, ball: number } {
    const strike = this.comparator.countStrike(guess, answer);
    const countIncluded = this.comparator.countIncludedNumber(guess, answer);

    return {
      strike,
      ball: countIncluded - strike,
    }
  }

  public isAnswer(guess: BaseballNumbers, answer: BaseballNumbers): boolean {
    const strike = this.comparator.countStrike(guess, answer);

    return strike === ANSWER_STRIKE_COUNT;
  }
}

export default Referee;