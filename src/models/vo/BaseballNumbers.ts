import { ERROR_MESSAGE } from "../../common/constants";

class BaseballNumbers {
  private numbers: number[];

  constructor(numbers: number[]) {
    if (!this.validate(numbers)) {
      throw Error(ERROR_MESSAGE);
    }

    this.numbers = numbers.map(Number);
  }

  private validate(numbers: number[]): boolean {
    if (this.isThreeLetters(numbers) && this.isNaturalNumber(numbers) && this.isUnique(numbers)) {
      return true;
    }

    return false;
  }

  private isThreeLetters(numbers: number[]): boolean {
    return numbers.length === 3;
  }

  private isNaturalNumber(numbers: number[]): boolean {
    const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const result = numbers.every((num) => {
      if(validNumbers.includes(num)) {
        return true;
      }
      return false;
    });

    return result;
  }

  private isUnique(numbers: number[]): boolean {
    const [first, second, third] = numbers;

    if (first === second || second === third || third === first) {
      return false;
    }

    return true;
  }

  public getNumbers(): number[] {
    return this.numbers;
  }
}

export default BaseballNumbers;