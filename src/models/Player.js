import { ERROR_MESSAGE, CHOICE_START_NEW_GAME, CHOICE_QUIT } from '../common/constants.js';
import GuessResults from './vo/GuessResults.js';
import GuessedNumbers from './vo/GuessedNumbers.js';

class Player {
  #guessedNumbers;
  #guessResults;

  guessNumbers(numbers) {    
    this.#guessedNumbers = new GuessedNumbers(numbers);
    this.#guessResults = new GuessResults
  }

  showGuessedNumbers() {
    return this.#guessedNumbers.getGuessedNumbers();
  }

  receiveGuessResults(strikes, balls) {
    this.#guessResults = new GuessResults(strikes, balls);
  }

  showGuessResults() {
    return this.#guessResults.showStrikesAndBalls();
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