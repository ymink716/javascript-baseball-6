import BaseballNumbersGenerator from '../src/models/BaseballNumbersGenerator';
import { MockRandoms } from '../src/models/utils/MockRandoms';

describe("BaseballNumbersGenerator", () => {
  describe("generate()", () => {
    test("임의의 BaseballNumbers를 반환한다.", async () => {
      const generator = new BaseballNumbersGenerator(new MockRandoms());
      
      const result = generator.generate();
      const [first, second, third] = result.getBaseballNumbers();

      expect(result.getBaseballNumbers().length).toBe(3);
      expect(first.getBaseballNumber() !== second.getBaseballNumber()).toBeTruthy();
      expect(second.getBaseballNumber() !== third.getBaseballNumber()).toBeTruthy();
      expect(third.getBaseballNumber() !== first.getBaseballNumber()).toBeTruthy();
    });
  })
});