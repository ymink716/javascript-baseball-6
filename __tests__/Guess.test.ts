import Guess from '../src/models/Guess';

describe("Guess", () => {
  describe("getNumbers()", () => {
    test("플레이어가 추측한 값을 반환한다.", () => {
      const numbers = [4, 2, 8];
      const guess = new Guess(numbers);

      const result = guess.getNumbers();

      expect(result).toEqual([4, 2, 8]);
    });
  });
})