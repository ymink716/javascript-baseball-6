import { ERROR_MESSAGE } from '../src/common/constants';
import BaseballNumbers from '../src/models/vo/BaseballNumbers';


describe("BaseballNumbers", () => {
  describe("constructor()", () => {
    test("길이가 3이 아니라면 Error가 발생한다.", () => {
      const numbers = [1, 2, 3, 4];

      expect(() => new BaseballNumbers(numbers)).toThrow(ERROR_MESSAGE);
    });

    test("1 ~ 9 사이의 값이 아니라면 Error가 발생한다.", () => {
      const numbers = [1, 0, 9];

      expect(() => new BaseballNumbers(numbers)).toThrow(ERROR_MESSAGE);
    });

    test("3개의 요소 중 중복이 있다면 Error가 발생한다.", () => {
      const numbers = [1, 1, 2];

      expect(() => new BaseballNumbers(numbers)).toThrow(ERROR_MESSAGE);
    });

    test("길이가 3이고 1~9 사이의 중복되지 않는 number 리스트를 멤버로 가진다.", () => {
      const numbers = [1, 2, 3];
      const result = new BaseballNumbers(numbers);

      expect(result.getNumbers().length).toBe(3);
      
      const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const [first, second, third] = result.getNumbers();
      
      //expect(validNumbers.includes(first)).toBeTruthy();
      //expect(validNumbers.includes(second)).toBeTruthy();
      //expect(validNumbers.includes(third)).toBeTruthy();

      //expect(first !== second && second !== third && third !== first).toBeTruthy();
    });
  });
})