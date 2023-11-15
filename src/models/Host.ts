import { CHOICE_QUIT, CHOICE_START_NEW_GAME, ERROR_MESSAGE } from "../common/constants";


class Host {
  public askRegame(choice: string): boolean {
    if (!this.isStartOrQuitOptions(choice)) {
      throw Error(ERROR_MESSAGE);
    }

    if (choice === CHOICE_START_NEW_GAME) {
      return true;
    }
    
    return false;
  }

  private isStartOrQuitOptions(input): boolean {
    return [CHOICE_START_NEW_GAME, CHOICE_QUIT].includes(input);
  }
}

export default Host;