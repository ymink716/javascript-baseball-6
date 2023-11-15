import Answer from "../src/models/Answer";
import BaseballNumbersGenerator from "../src/models/BaseballNumbersGenerator";

jest.mock("../src/models/BaseballNumbersGenerator");

describe("Answer", () => {
  describe("getNumbers()", () => {
    test("정답 숫자 리스트를 반환한다.", async () => {
      const randoms = [3, 2, 7];

      jest.spyOn(BaseballNumbersGenerator.prototype, 'generateRandomNumbers')
        .mockReturnValue(randoms);
      
      const answer = new Answer();
      const result = answer.getNumbers();
      
      expect(result).toEqual(randoms);
    });
  });
});