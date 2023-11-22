import { ERROR_MESSAGE } from '../src/common/constants';
import BaseballNumbers from '../src/models/vo/BaseballNumbers';
import BaseballNumber from '../src/models/vo/baseballNumber';


describe("BaseballNumbers", () => {
  describe("constructor()", () => {
    test("길이가 3이 아니라면 Error가 발생한다.", () => {
      const baseballNumbers = [
        new BaseballNumber(1), 
        new BaseballNumber(2),  
        new BaseballNumber(3), 
        new BaseballNumber(4), 
      ];

      expect(() => new BaseballNumbers(baseballNumbers)).toThrow(ERROR_MESSAGE);
    });

    test("3개의 요소 중 중복이 있다면 Error가 발생한다.", () => {
      const baseballNumbers = [
        new BaseballNumber(1), 
        new BaseballNumber(1),  
        new BaseballNumber(3), 
      ];

      expect(() => new BaseballNumbers(baseballNumbers)).toThrow(ERROR_MESSAGE);
    });

    test("길이가 3이고, 중복되지 않는 BaseballNumber 리스트를 멤버로 가진다.", () => {
      const baseballNumbers = [
        new BaseballNumber(1), 
        new BaseballNumber(2),  
        new BaseballNumber(3), 
      ];
      const result = new BaseballNumbers(baseballNumbers);

      expect(result.getBaseballNumbers().length).toBe(3);
      
      const [first, second, third] = result.getBaseballNumbers();
      expect(first.getBaseballNumber() !== second.getBaseballNumber()).toBeTruthy();
      expect(second.getBaseballNumber() !== third.getBaseballNumber()).toBeTruthy();
      expect(third.getBaseballNumber() !== first.getBaseballNumber()).toBeTruthy();
    });
  });

  describe("isIncluded()", () => {
    test("해당 값이 포함되어 있다면 true를 리턴한다.", () => {
      const baseballNumbers = new BaseballNumbers([
        new BaseballNumber(1), 
        new BaseballNumber(2),  
        new BaseballNumber(3), 
      ]);
      const other = new BaseballNumber(3);

      expect(baseballNumbers.isIncluded(other)).toBeTruthy();
    });

    test("해당 값이 포함되어 있지 않다면 false를 리턴한다.", () => {
      const baseballNumbers = new BaseballNumbers([
        new BaseballNumber(1), 
        new BaseballNumber(2),  
        new BaseballNumber(3), 
      ]);
      const other = new BaseballNumber(4);

      expect(baseballNumbers.isIncluded(other)).toBeFalsy();
    });
  })
})