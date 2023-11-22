import { ERROR_MESSAGE } from "../../common/constants";

class BaseballNumber {
  private baseballNumber: number;

  constructor(baseballNumber: number) {
    if (!this.isNaturalNumber(baseballNumber)) {
      throw Error(ERROR_MESSAGE);
    }

    this.baseballNumber = baseballNumber;
  }

  private isNaturalNumber(num: number): boolean {
    const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return validNumbers.includes(num);
  }

  public getBaseballNumber() {
    return this.baseballNumber;
  }

  public isEqual(other: BaseballNumber) {
    return this.getBaseballNumber() === other.getBaseballNumber();
  }
}

export default BaseballNumber;