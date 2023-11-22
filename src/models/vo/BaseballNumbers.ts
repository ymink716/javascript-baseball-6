import { ERROR_MESSAGE } from "../../common/constants";
import BaseballNumber from "./baseballNumber";

class BaseballNumbers {
  private baseballNumbers: BaseballNumber[];

  constructor(baseballNumbers: BaseballNumber[]) {
    if (!this.validate(baseballNumbers)) {
      throw Error(ERROR_MESSAGE);
    }

    this.baseballNumbers = baseballNumbers;
  }

  private validate(baseballNumbers: BaseballNumber[]): boolean {
    if (this.isThreeLetters(baseballNumbers) && this.isNotDuplicated(baseballNumbers)) {
      return true;
    }

    return false;
  }

  private isThreeLetters(baseballNumbers: BaseballNumber[]): boolean {
    return baseballNumbers.length === 3;
  }

  private isNotDuplicated(baseballNumbers: BaseballNumber[]): boolean {
    const [first, second, third] = baseballNumbers;
    
    if (first.isEqual(second) || second.isEqual(third) || third.isEqual(first)) {
      return false;
    }
    
    return true;
  }

  public getBaseballNumbers(): BaseballNumber[] {
    return this.baseballNumbers;
  }

  public isIncluded(other: BaseballNumber): boolean {
    let result = false;

    for (let i = 0; i < this.baseballNumbers.length; i++) {
      if (this.baseballNumbers[i].isEqual(other)) {
        result = true;
        break;
      }
    }

    return result;
  }
}

export default BaseballNumbers;