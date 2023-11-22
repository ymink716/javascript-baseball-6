import { MissionUtils } from "@woowacourse/mission-utils";
import GusessView from "../src/views/GuessView";

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

describe("GusessView", () => {
  describe("guessNumbers()", () => {
    test("입력받은 문자열을 숫자 리스트로 반환한다.", async () => {
      const answer = "246";
  
      mockQuestions(answer);
  
      const result = await GusessView.guessNumbers();
      
      expect(result).toEqual([2, 4, 6]);
    });
  });
});
