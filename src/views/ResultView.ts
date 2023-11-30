import { Console } from '@woowacourse/mission-utils';

const NOTHING = '낫싱';
const THREE_STRIKE = '3스트라이크';
const NOTHING_NUMBER = 0;
const GAME_CLEER_NUMBER = 3;

class ResultView {
  private readonly result: string;

  constructor(strike: number, ball: number) {
    this.result = `${ball}볼 ${strike}스트라이크`;

    if (this.isNothing(strike, ball)) {
      this.result = NOTHING;
    } 
    
    if (this.isThreeStrike(strike)) {
      this.result = THREE_STRIKE;
    }    
  }

  async printResult(): Promise<void> {
    await Console.print(this.result);
  }

  private isNothing(strike: number, ball: number): boolean {
    return strike === NOTHING_NUMBER && ball === NOTHING_NUMBER;
  }

  private isThreeStrike(strike: number): boolean {
    return strike === GAME_CLEER_NUMBER;
  }
}

export default ResultView;