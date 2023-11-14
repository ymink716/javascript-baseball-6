import Opponent from "../src/models/Opponent.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import AnswerNumbers from "../src/models/vo/AnswerNumbers";

jest.mock("../src/models/vo/AnswerNumbers.js");

describe("Opponent", () => {
  let opponent;

  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  };

  beforeEach(() => {
    opponent = new Opponent();
  });

  describe("prepareAnswerNumbers()", () => {
    test("정답 숫자 리스트를 생성한다.", async () => {
      const randoms = [1, 3, 3, 5, 8, 9];
      mockRandoms(randoms);
      
      await opponent.prepareAnswerNumbers();
      expect(AnswerNumbers).toBeCalled();
    });
  });

  describe("compareToAnswers()", () => {
    test("가지고 있는 정답 숫자와 비교하여 스트라이크, 볼 개수를 반환한다.", async () => {
      jest.spyOn(opponent, '#countStrikes').mockReturnValueOnce(1);
      jest.spyOn(opponent, '#countBalls').mockReturnValueOnce(2);

      const result = await opponent.compareToAnswers(1, 5, 3);

      expect(result.strikes).toBe(1);
      expect(result.balls).toBe(2);
    });
  });
});