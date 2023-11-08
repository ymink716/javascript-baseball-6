import { ERROR_MESSAGE } from "../../common/constants.js";

class GuessedNumbers {
  #guessedNumbers;

  constructor(numbers) {
    if (!this.#isValidNumbers(numbers)) {
      throw Error(ERROR_MESSAGE);
    }

    this.#guessedNumbers = numbers.map(Number);
  }

  #isValidNumbers(numbers) {
    if (this.#isThreeLetters(numbers) && this.#isNaturalNumber(numbers) && this.#isUnique(numbers)) {
      return true;
    }

    return false;
  }

  #isThreeLetters(numbers) {
    return numbers.length === 3;
  }

  #isNaturalNumber(numbers) {
    const validNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    numbers.forEach((num) => {
      if (!validNumbers.includes(num)) {
        return false;
      }
    });

    return true;
  }

  #isUnique(numbers) {
    const [first, second, third] = numbers;

    if (first === second || second === third || third === first) {
      return false;
    }

    return true;
  }

  getGuessedNumbers() {
    return this.#guessedNumbers;
  }
}

export default GuessedNumbers;