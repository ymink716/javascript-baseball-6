import { ERROR_MESSAGE } from "../common/constants";


class Host {
  private readonly CHOICE_START_NEW_GAME = '1';
  private readonly CHOICE_QUIT = '2';

  public askRegame(choice: string): boolean {
    if (!this.isStartOrQuitOptions(choice)) {
      throw Error(ERROR_MESSAGE);
    }

    if (choice === this.CHOICE_START_NEW_GAME) {
      return true;
    }
    
    return false;
  }

  private isStartOrQuitOptions(input): boolean {
    return [this.CHOICE_START_NEW_GAME, this.CHOICE_QUIT].includes(input);
  }
}

export default Host;