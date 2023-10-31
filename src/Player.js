import { ERROR_MESSAGE } from './common/constants.js';
import PlayerConsoleHelper from './utils/PlayerConsoleHelper.js';

class Player {
  constructor() {
    this.consoleHelper = new PlayerConsoleHelper();
  }

  async guessNumbers() {
    let guessedNumbers = await this.consoleHelper.enterGuessedNumbers();
    
    if (!this.isValidNumbers(guessedNumbers)) {
      throw Error(ERROR_MESSAGE);
    }

    guessedNumbers = guessedNumbers.map(Number);
    
    return guessedNumbers;
  }

  isValidNumbers(guessedNumbers) {
    if (this.isThreeLetters(guessedNumbers) && this.isNaturalNumber(guessedNumbers) && this.isUnique(guessedNumbers)) {
      return true;
    }

    return false;
  }

  isThreeLetters(guessedNumbers) {
    return guessedNumbers.length === 3;
  }

  isNaturalNumber(guessedNumbers) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    guessedNumbers.forEach((num) => {
      if (!numbers.includes(num)) {
        return false;
      }
    });

    return true;
  }

  isUnique(guessedNumbers) {
    const [first, second, third] = guessedNumbers;

    if (first === second || second === third || third === first) {
      return false;
    }

    return true;
  }
}

export default Player;