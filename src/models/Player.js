import { ERROR_MESSAGE } from '../common/constants.js';

class Player {
  #currentGuessedNumbers = [];

  guessNumbers(guessedNumbers) {    
    if (!this.#isValidNumbers(guessedNumbers)) {
      throw Error(ERROR_MESSAGE);
    }

    this.#currentGuessedNumbers = guessedNumbers.map(Number);
  }

  #isValidNumbers(guessedNumbers) {
    if (this.#isThreeLetters(guessedNumbers) && this.#isNaturalNumber(guessedNumbers) && this.#isUnique(guessedNumbers)) {
      return true;
    }

    return false;
  }

  #isThreeLetters(guessedNumbers) {
    return guessedNumbers.length === 3;
  }

  #isNaturalNumber(guessedNumbers) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    guessedNumbers.forEach((num) => {
      if (!numbers.includes(num)) {
        return false;
      }
    });

    return true;
  }

  #isUnique(guessedNumbers) {
    const [first, second, third] = guessedNumbers;

    if (first === second || second === third || third === first) {
      return false;
    }

    return true;
  }

  
}

export default Player;