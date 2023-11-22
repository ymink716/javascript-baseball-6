import { NOTHING, THREE_STRIKE } from "../common/constants";
import BaseballNumbersComparator from "./BaseballNumbersComparator";
import BaseballNumbers from "./vo/BaseballNumbers";


class Referee {
  private readonly comparator: BaseballNumbersComparator;

  constructor() {
    this.comparator = new BaseballNumbersComparator();
  }

  public judge(guess: BaseballNumbers, answer: BaseballNumbers): string {
    const strikes = this.comparator.countStrikes(guess, answer);
    const countIncluded = this.comparator.countIncludedNumbers(guess, answer);

    if (this.isNothing(strikes, countIncluded)) {
      return NOTHING;
    } 
    
    if (this.isThreeStrikes(strikes)) {
      return THREE_STRIKE;
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