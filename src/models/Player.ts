import { ERROR_MESSAGE, CHOICE_START_NEW_GAME, CHOICE_QUIT } from '../common/constants';
import GuessResults from './vo/GuessResults';
import BaseballGameNumbers from './vo/BaseballGameNumbers';

class Player {
  private numbers: BaseballGameNumbers;
  //private guessResults: GuessResults;
  
  constructor(numbers: string[]) {
    this.numbers = new BaseballGameNumbers(numbers);
  }

  public getNumbers(): number[] {
    return this.numbers.getNumbers();
  }

  // receiveGuessResults(strikes: number, balls: number) {
  //   this.guessResults = new GuessResults(strikes, balls);
  // }

  // showGuessResults() {
  //   return this.guessResults.showStrikesAndBalls();
  // }

  // async chooseRestartOrQuit(choice: string) {
  //   if (!this.isStartOrQuitOptions(choice)) {
  //     throw Error(ERROR_MESSAGE);
  //   }

  //   if (choice === CHOICE_START_NEW_GAME) {
  //     return CHOICE_START_NEW_GAME;
  //   }
    
  //   return CHOICE_QUIT;
  // }

  // private isStartOrQuitOptions(input) {
  //   return ['1', '2'].includes(input);
  // }
}

export default Player;