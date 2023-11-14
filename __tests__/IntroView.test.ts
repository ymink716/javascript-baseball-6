import { MissionUtils } from "@woowacourse/mission-utils";
import IntroView from "../src/views/IntroView";
import { INTRO_MESSAGE } from '../src/common/constants';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("IntroView", () => {
  describe("announceBeginning()", () => {
    test("게임 시작 메세지를 콘솔에 출력한다.", async () => {
      const logSpy = getLogSpy();
  
      const introView = new IntroView();
      await introView.announceBeginning();
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INTRO_MESSAGE));
    });
  })
});
