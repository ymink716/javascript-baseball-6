import { Console } from '@woowacourse/mission-utils';
import { CLEER_GAME, NOTHING, THREE_STRIKE } from '../common/constants';

class GuessResultsView {
  private readonly NOTHING = NOTHING;
  private readonly CLEER_GAME = CLEER_GAME;
  private readonly THREE_STRIKE = THREE_STRIKE;

  async showComparedResult(strikes: number, balls: number): Promise<void> {
    if (this.isNothing(strikes, balls)) {
      this.printNothing();
      return;
    } 
    
    if (this.isThreeStrikes(strikes, balls)) {
      this.printThreeStrikes();
      return;
    }
    
    this.printBallAndStrike(balls, strikes);
  }

  private isNothing(strikes: number, balls: number): boolean {
    return strikes === 0 && balls === 0;
  }

  private isThreeStrikes(strikes: number, balls: number): boolean {
    return strikes === 3 && balls === 0;
  }

  private async printNothing(): Promise<void> {
    await Console.print(this.NOTHING);
  }

  private async printThreeStrikes(): Promise<void> {
    await Console.print(this.THREE_STRIKE);
    await Console.print(this.CLEER_GAME);
  }

  private async printBallAndStrike(balls: number, strikes: number): Promise<void> {
    await Console.print(`${balls}볼 ${strikes}스트라이크`);
  }
}

export default GuessResultsView;