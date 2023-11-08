import { MissionUtils } from "@woowacourse/mission-utils";
import RandomNumberGenerator from '../src/utils/RandomNumberGenerator';

describe("RandomNumberGenerator", () => {

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
      const randomNumberGenerator = new RandomNumberGenerator();
      
      const result = randomNumberGenerator.generateRandomNumbers();

      expect(result.length).toBe(3);
      expect(result[0] !== result[1]).toBeTruthy();
      expect(result[1] !== result[2]).toBeTruthy();
      expect(result[2] !== result[0]).toBeTruthy();
    });
  })
});