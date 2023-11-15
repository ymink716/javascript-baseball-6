import Referee from '../src/models/Referee';
import BaseballNumbersComparator from '../src/models/BaseballNumbersComparator';
import { NOTHING, THREE_STRIKE } from '../src/common/constants';

jest.mock('../src/models/BaseballNumbersComparator');

describe("Referee", () => {
  let referee: Referee;

  beforeAll(() => {
    referee = new Referee();
  });

  describe("judge()", () => {
    test("스트라이크와 볼이 모두 0개라면 낫싱을 알리는 문구를 리턴한다.", () => {
      const guessdNumbers = [1, 2, 3];
      const answerNumbers = [4, 5, 6];

      jest.spyOn(BaseballNumbersComparator.prototype, 'countStrikes').mockReturnValueOnce(0);
      jest.spyOn(BaseballNumbersComparator.prototype, 'countBalls').mockReturnValueOnce(0);

      const result = referee.judge(guessdNumbers, answerNumbers);

      expect(result).toBe(NOTHING);
    });

    test("스트라이크가 3개라면 3스트라이크를 알리는 문구를 리턴한다.", () => {
      const guessdNumbers = [1, 2, 3];
      const answerNumbers = [1, 2, 3];

      jest.spyOn(BaseballNumbersComparator.prototype, 'countStrikes').mockReturnValueOnce(3);
      jest.spyOn(BaseballNumbersComparator.prototype, 'countBalls').mockReturnValueOnce(0);

      const result = referee.judge(guessdNumbers, answerNumbers);

      expect(result).toBe(THREE_STRIKE);
    });

    test("낫싱도 3스트라이크도 아니라면 볼과 스트라이크의 개수를 알려주는 문구를 리턴한다.", () => {
      const guessdNumbers = [1, 2, 3];
      const answerNumbers = [1, 3, 5];

      const strikes = 1;
      const balls = 1;

      jest.spyOn(BaseballNumbersComparator.prototype, 'countStrikes').mockReturnValueOnce(strikes);
      jest.spyOn(BaseballNumbersComparator.prototype, 'countBalls').mockReturnValueOnce(balls);

      const result = referee.judge(guessdNumbers, answerNumbers);

      expect(result).toBe(`${balls}볼 ${strikes}스트라이크`);
    });
  })
});

