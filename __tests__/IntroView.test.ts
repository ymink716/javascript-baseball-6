import { MissionUtils } from "@woowacourse/mission-utils";
import IntroView from "../src/views/IntroView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("IntroView", () => {
  describe("announceBeginning()", () => {
    const INTRO_MESSAGE = '숫자 야구 게임을 시작합니다.';
    test("게임 시작 메세지를 콘솔에 출력한다.", async () => {
      const logSpy = getLogSpy();
  
      const introView = new IntroView();
      await introView.announceBeginning();
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INTRO_MESSAGE));
    });
  })
});
