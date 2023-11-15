import { NOTHING, THREE_STRIKE } from "../common/constants";
import BaseballNumbersComparator from "./BaseballNumbersComparator";


class Referee {
  private readonly comparator: BaseballNumbersComparator;

  constructor() {
    this.comparator = new BaseballNumbersComparator();
  }

  public judge(guessdNumbers: number[], answerNumbers: number[]) {
    const strikes = this.comparator.countStrikes(guessdNumbers, answerNumbers);
    const balls = this.comparator.countBalls(guessdNumbers, answerNumbers);

    if (this.isNothing(strikes, balls)) {
      return NOTHING;
    } 
    
    if (this.isThreeStrikes(strikes, balls)) {
      return THREE_STRIKE;
    }
    
    return `${balls}볼 ${strikes}스트라이크`;
  }

  private isNothing(strikes: number, balls: number): boolean {
    return strikes === 0 && balls === 0;
  }

  private isThreeStrikes(strikes: number, balls: number): boolean {
    return strikes === 3 && balls === 0;
  }
}


export default Referee;