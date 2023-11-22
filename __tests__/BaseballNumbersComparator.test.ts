import BaseballNumbersComparator from '../src/models/BaseballNumbersComparator';
import BaseballNumbers from '../src/models/vo/BaseballNumbers';
import BaseballNumber from '../src/models/vo/baseballNumber';

describe("BaseballNumbersComparator", () => {
  describe("countStrikes()", () => {
    test("두 리스트에서 값과 위치가 같은 요소의 개수를 반환한다.", () => {
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(5),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(3),
        new BaseballNumber(7),
      ]);

      const comparator = new BaseballNumbersComparator();
      const result  = comparator.countStrikes(guess, answer);

      expect(result).toBe(1);
    });
  });

  describe("countIncludedNumbers()", () => {
    test("두 리스트에서 중복된 요소의 개수를 반환한다.", () => {
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(5),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(3),
        new BaseballNumber(7),
      ]);

      const comparator = new BaseballNumbersComparator();
      const result  = comparator.countIncludedNumbers(guess, answer);

      expect(result).toBe(2);
    });
  });
});