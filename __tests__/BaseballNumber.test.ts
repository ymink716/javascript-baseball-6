import { ERROR_MESSAGE } from "../src/common/constants";
import BaseballNumber from "../src/models/vo/baseballNumber";

describe("BaseballNumber", () => {
  describe("contructor()", () => {
    test("1~9 사이의 수가 아니라면 에러가 발생한다.", () => {
      const num = 0;

      expect(() => new BaseballNumber(num)).toThrow(ERROR_MESSAGE);
    });
  });

  describe("isEqual()", () => {
    test("두 값이 일치하면 true를 반환한다.", () => {
      const baseballNumber1 = new BaseballNumber(1);
      const baseballNumber2 = new BaseballNumber(1);

      expect(baseballNumber1.isEqual(baseballNumber2)).toBeTruthy();
    });

    test("두 값이 일치하지 않으면 false를 반환한다.", () => {
      const baseballNumber1 = new BaseballNumber(1);
      const baseballNumber2 = new BaseballNumber(2);

      expect(baseballNumber1.isEqual(baseballNumber2)).toBeFalsy();
    });
  })
})