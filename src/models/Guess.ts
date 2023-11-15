import { ERROR_MESSAGE, CHOICE_START_NEW_GAME, CHOICE_QUIT } from '../common/constants';
import GuessResults from './vo/GuessResults';
import BaseballNumbers from './vo/BaseballNumbers';

class Guess {
  private numbers: BaseballNumbers;
  
  constructor(numbers: string[]) {
    this.numbers = new BaseballNumbers(numbers);
  }

  public getNumbers(): number[] {
    return this.numbers.getNumbers();
  }
}

export default Guess;