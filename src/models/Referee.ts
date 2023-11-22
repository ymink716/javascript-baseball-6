import { Comparator } from './interface/Comparator';
import BaseballNumbers from "./vo/BaseballNumbers";


class Referee {
  private readonly NOTHING = '낫싱';
  private readonly THREE_STRIKE = '3스트라이크';
  private readonly comparator: Comparator;

  constructor(comparator: Comparator) {
    this.comparator = comparator;
  }

  public judge(guess: BaseballNumbers, answer: BaseballNumbers): string {
    const strikes = this.comparator.countStrikes(guess, answer);
    const countIncluded = this.comparator.countIncludedNumbers(guess, answer);

    if (this.isNothing(strikes, countIncluded)) {
      return this.NOTHING;
    } 
    
    if (this.isThreeStrikes(strikes)) {
      return this.THREE_STRIKE;
    }
    
    return `${countIncluded - strikes}볼 ${strikes}스트라이크`;
  }

  private isNothing(strikes: number, countIncluded: number): boolean {
    return strikes === 0 && countIncluded === 0;
  }

  private isThreeStrikes(strikes: number): boolean {
    return strikes === 3;
  }
}

export default Referee;