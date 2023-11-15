import { MissionUtils } from "@woowacourse/mission-utils";
import BaseballNumbersGenerator from '../src/models/BaseballNumbersGenerator';

describe("BaseballNumbersGenerator", () => {

  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  };

  describe("generateRandomNumbers()", () => {
    test("1~9 사이의 중복되지 않은 3개의 숫자를 리스트로 반환한다.", async () => {
      const randoms = [1, 3, 3, 5, 8, 9];
      mockRandoms(randoms);

      const randomNumberGenerator = new BaseballNumbersGenerator();
      const result = randomNumberGenerator.generateRandomNumbers();

      expect(result.length).toBe(3);
      expect(result[0] !== result[1]).toBeTruthy();
      expect(result[1] !== result[2]).toBeTruthy();
      expect(result[2] !== result[0]).toBeTruthy();
    });
  })
});