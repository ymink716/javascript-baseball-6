import { MissionUtils } from "@woowacourse/mission-utils";
import RegameView from "../src/views/RegameView";

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

describe("RegameView", () => {
  describe("askRegame()", () => {
    test("입력받은 문자열을 반환한다.", async () => {
      const answer = "1";
  
      mockQuestions(answer);
  
      const regameView = new RegameView();
      const result = await regameView.askRegame();
      
      expect(result).toBe('1');
    });
  });
});
