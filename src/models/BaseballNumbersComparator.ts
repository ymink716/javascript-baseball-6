class BaseballNumbersComparator {
  public countStrikes(guessedNumbers: number[], answerNumbers: number[]): number {
    let strikes = 0;

    guessedNumbers.forEach((guess, index) => {
      if (guess === answerNumbers[index]) {
        strikes += 1;
      }
    });

    return strikes;
  }

  public countBalls(guessedNumbers: number[], answerNumbers: number[]): number {
    let balls = 0;

    guessedNumbers.forEach((guess, index) => {
      if (guess !== answerNumbers[index] && answerNumbers.includes(guess)) {
        balls += 1;
      }
    });
    
    return balls;
  }
}

export default BaseballNumbersComparator;