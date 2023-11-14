import { ERROR_MESSAGE } from "../../common/constants";

class GuessedNumbers {
  private guessedNumbers: number[];

  constructor(numbers: string[]) {
    if (!this.isValidNumbers(numbers)) {
      throw Error(ERROR_MESSAGE);
    }

    this.guessedNumbers = numbers.map(Number);
  }

  private isValidNumbers(numbers: string[]): boolean {
    if (this.isThreeLetters(numbers) && this.isNaturalNumber(numbers) && this.isUnique(numbers)) {
      return true;
    }

    return false;
  }

  private isThreeLetters(numbers: string[]): boolean {
    return numbers.length === 3;
  }

  private isNaturalNumber(numbers: string[]): boolean {
    const validNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    numbers.forEach((num) => {
      if (!validNumbers.includes(num)) {
        return false;
      }
    });

    return true;
  }

  private isUnique(numbers: string[]): boolean {
    const [first, second, third] = numbers;

    if (first === second || second === third || third === first) {
      return false;
    }

    return true;
  }

  getGuessedNumbers(): number[] {
    return this.guessedNumbers;
  }
}

export default GuessedNumbers;