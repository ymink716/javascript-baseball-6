import { Console } from '@woowacourse/mission-utils';

class BallAndStrikesView {
  async printBallAndStrike(balls: number, strikes: number): Promise<void> {
    await Console.print(`${balls}볼 ${strikes}스트라이크`);
  }

  // async showComparedResult(strikes: number, balls: number): Promise<void> {
  //   if (this.isNothing(strikes, balls)) {
  //     this.printNothing();
  //     return;
  //   } 
    
  //   if (this.isThreeStrikes(strikes, balls)) {
  //     this.printThreeStrikes();
  //     return;
  //   }
    
  //   this.printBallAndStrike(balls, strikes);
  // }

  // private isNothing(strikes: number, balls: number): boolean {
  //   return strikes === 0 && balls === 0;
  // }

  // private isThreeStrikes(strikes: number, balls: number): boolean {
  //   return strikes === 3 && balls === 0;
  // }
}

export default BallAndStrikesView;