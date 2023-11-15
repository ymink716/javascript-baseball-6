import { Console } from '@woowacourse/mission-utils';
import { CLEER_GAME, START_OR_QUIT } from '../common/constants';

class RegameView {
  private readonly START_OR_QUIT = START_OR_QUIT;
  
  async askRegame(): Promise<string> {
    await Console.print(CLEER_GAME);
    return await Console.readLineAsync(this.START_OR_QUIT);
  }
}

export default RegameView;