import { MissionUtils } from "@woowacourse/mission-utils";
import ResultView from "../src/views/ResultView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const NOTHING = '낫싱';
const THREE_STRIKE = '3스트라이크';

describe("ResultsView", () => {
  describe("printResult()", () => {
    test("0볼 0스트라이크라면 낫싱 메시지를 출력한다.", async () => {
      const logSpy = getLogSpy();
      const strike = 0;
      const ball = 0;

      const resultView = new ResultView(strike, ball);
      await resultView.printResult();
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(NOTHING));
    });

    test("3스트라이크에 해당하는 메시지를 출력한다.", async () => {
      const logSpy = getLogSpy();
      const strike = 3;
      const ball = 0;

      const resultView = new ResultView(strike, ball);
      await resultView.printResult();
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(THREE_STRIKE));
    });

    test("스트라이크 볼 개수를 알려주는 메시지를 출력한다.", async () => {
      const logSpy = getLogSpy();
      const strike = 1;
      const ball = 2;

      const resultView = new ResultView(strike, ball);
      await resultView.printResult();
  
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`${ball}볼 ${strike}스트라이크`));
    });
  });
});
