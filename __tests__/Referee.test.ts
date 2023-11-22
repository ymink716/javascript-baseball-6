import Referee from '../src/models/Referee';
import BaseballNumbersComparator from '../src/models/BaseballNumbersComparator';
import { Comparator } from '../src/models/interface/Comparator';
import BaseballNumbers from '../src/models/vo/BaseballNumbers';
import BaseballNumber from '../src/models/vo/baseballNumber';

describe("Referee", () => {
  const NOTHING = '낫싱';
  const THREE_STRIKE = '3스트라이크';

  let comparator: Comparator;
  let referee: Referee;

  beforeAll(() => {
    comparator = new BaseballNumbersComparator();
    referee = new Referee(comparator);
  });

  describe("judge()", () => {
    test("스트라이크와 볼이 모두 0개라면 낫싱을 알리는 문구를 리턴한다.", () => {
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(4),
        new BaseballNumber(5),
        new BaseballNumber(6),
      ]); 

      const result = referee.judge(guess, answer);

      expect(result).toBe(NOTHING);
    });

    test("스트라이크가 3개라면 3스트라이크를 알리는 문구를 리턴한다.", () => {
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]); 

      const result = referee.judge(guess, answer);

      expect(result).toBe(THREE_STRIKE);
    });

    test("낫싱도 3스트라이크도 아니라면 볼과 스트라이크의 개수를 알려주는 문구를 리턴한다.", () => {
      const guessdNumbers = [1, 2, 3];
      const answerNumbers = [1, 3, 5];
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(3),
        new BaseballNumber(5),
      ]); 
      const strikes = 1;
      const balls = 1;

      const result = referee.judge(guess, answer);

      expect(result).toBe(`${balls}볼 ${strikes}스트라이크`);
    });
  })
});

