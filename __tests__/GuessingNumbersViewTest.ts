import { MissionUtils } from "@woowacourse/mission-utils";
import GusessingNumbersView from "../src/views/GuessingNumbersView";

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

describe("GusessingNumbersView", () => {
  describe("enterGuessedNumbers()", () => {
    test("입력받은 문자열을 리스트로 반환한다.", async () => {
      const answer = "246";
  
      mockQuestions(answer);
  
      const guessingNumbersView = new GusessingNumbersView();
      const result = await guessingNumbersView.enterGuessedNumbers();
      
      expect(result).toEqual(['2', '4', '6']);
    });
  });
});
