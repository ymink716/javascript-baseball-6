import { ERROR_MESSAGE, CHOICE_START_NEW_GAME, CHOICE_QUIT } from '../common/constants';
import GuessResults from './vo/GuessResults';
import GuessedNumbers from './vo/GuessedNumbers';

class Player {
  private guessedNumbers: GuessedNumbers;
  private guessResults: GuessResults;
  
  constructor(numbers: string[]) {
    this.guessedNumbers = new GuessedNumbers(numbers);
  }

  // // 현재 플레이어가 추측한 숫자를 저장하는 로직
  // guessNumbers(numbers) {    
  //   this.#guessedNumbers = new GuessedNumbers(numbers);
  // }

  // 
  showGuessedNumbers(): number[] {
    return this.guessedNumbers.getGuessedNumbers();
  }

  receiveGuessResults(strikes: number, balls: number) {
    this.guessResults = new GuessResults(strikes, balls);
  }

  showGuessResults() {
    return this.guessResults.showStrikesAndBalls();
  }

  async chooseRestartOrQuit(choice: string) {
    if (!this.isStartOrQuitOptions(choice)) {
      throw Error(ERROR_MESSAGE);
    }

    if (choice === CHOICE_START_NEW_GAME) {
      return CHOICE_START_NEW_GAME;
    }
    
    return CHOICE_QUIT;
  }

  private isStartOrQuitOptions(input) {
    return ['1', '2'].includes(input);
  }
}

export default Player;