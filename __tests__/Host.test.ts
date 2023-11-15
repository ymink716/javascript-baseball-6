import { CHOICE_QUIT, CHOICE_START_NEW_GAME, ERROR_MESSAGE } from './../src/common/constants';
import Host from '../src/models/Host';

describe("Host", () => { 
  let host: Host;

  beforeAll(() => {
    host = new Host();
  });

  describe("askRegame()", () => {
    test("게임 재시작을 원하는 경우 true 를 반환한다.", () => {
      const choice = CHOICE_START_NEW_GAME;

      const result = host.askRegame(choice);

      expect(result).toBeTruthy();
    });

    test("게임 재시작을 원하지 않는 다면 false 를 반환한다.", () => {
      const choice = CHOICE_QUIT;

      const result = host.askRegame(choice);

      expect(result).toBeFalsy();
    });

    test("없는 옵션을 파라미터로 넘긴다면 Error가 발생한다.", () => {
      const choice = "wrong";

      expect(() => host.askRegame(choice)).toThrow(ERROR_MESSAGE);
    });
  });
})