import BaseballNumbersComparator from '../src/models/BaseballNumbersComparator';

describe("BaseballNumbersComparator", () => {
  describe("countStrikes()", () => {
    test("두 개의 리스트에서 값과 위치가 같은 요소의 개수를 반환한다.", () => {
      const guessedNumbers = [1, 5, 3];
      const answerNumbers = [1, 3, 7];

      const comparator = new BaseballNumbersComparator();
      const result  = comparator.countStrikes(guessedNumbers, answerNumbers);

      expect(result).toBe(1);
    });
  });

  describe("countBalls()", () => {
    test("두 개의 리스트에서 값은 포함하지만 위치는 다른 요소의 개수를 반환한다.", () => {
      const guessedNumbers = [1, 5, 3];
      const answerNumbers = [1, 3, 7];

      const comparator = new BaseballNumbersComparator();
      const result  = comparator.countBalls(guessedNumbers, answerNumbers);

      expect(result).toBe(1);
    });
  });
});