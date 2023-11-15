import { Console } from '@woowacourse/mission-utils';

class ResultView {
  private readonly result: string;

  constructor(result: string) {
    this.result = result;
  }

  async printResult(): Promise<void> {
    await Console.print(this.result);
  }
}

export default ResultView;