import { ERROR_MESSAGE, CHOICE_START_NEW_GAME, CHOICE_QUIT } from '../common/constants.js';

class Player {
  #currentGuessedNumbers = [];
  #strikes = 0;
  #balls = 0;

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

  showGuessedNumbers() {
    return this.#currentGuessedNumbers;
  }

  receiveComparedResult(strikes, balls) {
    this.#strikes = strikes;
    this.#balls = balls;
  }

  showComparedResult() {
    return {
      strikes: this.#strikes,
      balls: this.#balls,
    }
  }

  async chooseRestartOrQuit(choice) {
    if (!this.#isStartOrQuitOptions(choice)) {
      throw Error(ERROR_MESSAGE);
    }

    if (choice === CHOICE_START_NEW_GAME) {
      return CHOICE_START_NEW_GAME;
    }
    
    return CHOICE_QUIT;
  }

  #isStartOrQuitOptions(input) {
    return ['1', '2'].includes(input);
  }
}

export default Player;