import { Console } from '@woowacourse/mission-utils';
import { START_OR_QUIT } from '../common/constants';

class AskingRestartView {
  private readonly START_OR_QUIT = START_OR_QUIT;
  
  async askRestartOrQuit(): Promise<string> {
    return await Console.readLineAsync(this.START_OR_QUIT);
  }
}

export default AskingRestartView;