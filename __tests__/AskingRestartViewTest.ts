import { MissionUtils } from "@woowacourse/mission-utils";
import AskingRestartView from "../src/views/AskingRestartView";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("AskingRestartView", () => {
  describe("askRestartOrQuit()", () => {
    test("입력받은 문자열을 반환한다.", async () => {
      const answer = "1";
  
      mockQuestions(answer);
  
      const askingRestartView = new AskingRestartView();
      const result = await askingRestartView.askRestartOrQuit();
      
      expect(result).toBe('1');
    });
  });
});
