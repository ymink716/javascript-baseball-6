import BaseballNumbersGenerator from '../src/models/BaseballNumbersGenerator';
import { MockRandoms } from '../src/models/utils/MockRandoms';

describe("BaseballNumbersGenerator", () => {
  describe("generate()", () => {
    test("길이가 3개인 BaseballNumber 리스트를 반환한다.", async () => {
      const generator = new BaseballNumbersGenerator(new MockRandoms());
      
      const result = generator.generate();

      expect(result.getBaseballNumbers().length).toBe(3);
    });

    test("각 요소는 중복되지 않는다.", async () => {
      const generator = new BaseballNumbersGenerator(new MockRandoms());
      
      const result = generator.generate();

      const [first, second, third] = result.getBaseballNumbers();
      expect(first.getBaseballNumber() !== second.getBaseballNumber()).toBeTruthy();
      expect(second.getBaseballNumber() !== third.getBaseballNumber()).toBeTruthy();
      expect(third.getBaseballNumber() !== first.getBaseballNumber()).toBeTruthy();
    });
  })
});