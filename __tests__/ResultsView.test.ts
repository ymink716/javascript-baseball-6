import { MissionUtils } from "@woowacourse/mission-utils";
import { CLEER_GAME, NOTHING, THREE_STRIKE } from '../src/common/constants';
import ResultView from "../src/views/ResultView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("ResultsView", () => {
  describe("printResult()", () => {
    test("게임 결과 메세지를 출력한다..", async () => {
      const logSpy = getLogSpy();
      
      const result = '1볼 2스트라이크';

      const resultView = new ResultView(result);
      await resultView.printResult();
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  })
});
