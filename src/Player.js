import PlayerConsoleHelper from './utils/PlayerConsoleHelper.js';

class Player {
  constructor() {
    this.consoleHelper = new PlayerConsoleHelper();
  }

  async guessNumbers() {
    let guessedNumbers = await this.consoleHelper.enterGuessedNumbers();
    
    if (this.isInvalidNumbers(guessedNumbers)) {
      throw Error('잘못된 값을 입력하셨습니다.');
    }

    guessedNumbers = guessedNumbers.map(Number);
    
    return guessedNumbers;
  }

  isInvalidNumbers(guessedNumbers) {
    if (this.isNotThreeLetters(guessedNumbers)) {
      return true;
    }

    if(this.isNotNaturalNumber(guessedNumbers)) {
      return true;
    }

    if(this.isDuplicated(guessedNumbers)) {
      return true;
    }
  }

  isNotThreeLetters(guessedNumbers) {
    return guessedNumbers.length !== 3;
  }

  isNotNaturalNumber(guessedNumbers) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    guessedNumbers.forEach((num) => {
      if (!num in numbers) {
        return true;
      }
    });

    return false;
  }

  isDuplicated(guessedNumbers) {
    const [first, second, third] = guessedNumbers;

    if (first === second || second === third || third === first) {
      return true;
    }

    return false;
  }
}

export default Player;