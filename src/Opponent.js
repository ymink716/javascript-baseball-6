import { Random } from '@woowacourse/mission-utils';

class Opponent {

  constructor() {
    this.answerNumbers = [];
  }

  async prepareAnswerNumbers() {
    this.answerNumbers = await Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async checkNumbers() {
    
  }
}

export default Opponent;
