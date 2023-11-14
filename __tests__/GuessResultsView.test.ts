import { MissionUtils } from "@woowacourse/mission-utils";
import { CLEER_GAME, NOTHING, THREE_STRIKE } from '../src/common/constants';
import GuessResultsView from "../src/views/GuessResultsView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("GuessResultsView", () => {
  describe("showComparedResult()", () => {
    test("스트라이크 0, 볼 0 이면 낫싱에 관한 메시지를 출력한다.", async () => {
      const logSpy = getLogSpy();
      
      const strikes = 0;
      const balls = 0;

      const guessResultsView = new GuessResultsView();
      await guessResultsView.showComparedResult(strikes, balls);
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(NOTHING));
    });

    test("스트라이크 3, 볼 0 이면 3스트라이크와 게임 클리어에 관한 메시지를 출력한다.", async () => {
      const logSpy = getLogSpy();
      
      const strikes = 3;
      const balls = 0;

      const guessResultsView = new GuessResultsView();
      await guessResultsView.showComparedResult(strikes, balls);
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(THREE_STRIKE));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(CLEER_GAME));
    });

    test("스트라이크나 볼이 하나 이상인 경우 해당 결과를 출력한다.", async () => {
      const logSpy = getLogSpy();
      
      const strikes = 1;
      const balls = 2;

      const guessResultsView = new GuessResultsView();
      await guessResultsView.showComparedResult(strikes, balls);
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(
        `${balls}볼 ${strikes}스트라이크`
      ));
    });
  })
});
