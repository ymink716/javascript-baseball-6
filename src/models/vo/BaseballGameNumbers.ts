import { ERROR_MESSAGE } from "../../common/constants";

class BaseballGameNumbers {
  private numbers: number[];

  constructor(numbers: string[] | number[]) {
    if (!this.validate(numbers)) {
      throw Error(ERROR_MESSAGE);
    }

    this.numbers = numbers.map(Number);
  }

  private validate(numbers: string[] | number[]): boolean {
    if (this.isThreeLetters(numbers) && this.isNaturalNumber(numbers) && this.isUnique(numbers)) {
      return true;
    }

    return false;
  }

  private isThreeLetters(numbers: string[] | number[]): boolean {
    return numbers.length === 3;
  }

  private isNaturalNumber(numbers: string[] | number[]): boolean {
    const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.forEach((num) => {
      if (!validNumbers.includes(Number(num))) {
        return false;
      }
    });

    return true;
  }

  private isUnique(numbers: string[] | number[]): boolean {
    const [first, second, third] = numbers;

    if (first === second || second === third || third === first) {
      return false;
    }

    return true;
  }

  getNumbers(): number[] {
    return this.numbers;
  }
}

export default BaseballGameNumbers;