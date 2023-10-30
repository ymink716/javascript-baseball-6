import BaseballGameConsoleHelper from './utils/BaseballGameConsoleHelper.js';
import BaseballGameService from './BaseballGameService.js';

class BaseballGameClient {
  constructor() {
    this.consoleHelper = new BaseballGameConsoleHelper();
    this.baseballGameService = new BaseballGameService();
  }

  async playBaseballGame() {
    await startBaseballGame();

    let userInput;

    while (userInput !== '2') {
      userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');

      if (userInput.length !== 3 || isNaN(userInput)) {
        throw Error('잘못된 값을 입력하셨습니다.');
      }

      await this.opponent.checkNumbers();

      if (this.player.strikes === 0) {
        Console.print('낫싱');
      } else if (this.player.strikes === 3) {
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        
        userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

        if (userInput === '1') {
          await this.opponent.giveAnswerNumbers();
        }
      } else {
        Console.print(`${this.player.balls}볼 ${this.player.strikes}스트라이크`);
      }
    }
  }

  async startBaseballGame() {
    consoleHelper.printStartBaseballGame();
    await this.baseballGameService.prepareAnswerNumbers();
  }
}

export default BaseballGameClient;