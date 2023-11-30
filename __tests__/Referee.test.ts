import Referee from '../src/models/Referee';
import BaseballNumbersComparator from '../src/models/BaseballNumbersComparator';
import { Comparator } from '../src/models/interface/Comparator';
import BaseballNumbers from '../src/models/vo/BaseballNumbers';
import BaseballNumber from '../src/models/vo/baseballNumber';

describe("Referee", () => {
  let comparator: Comparator;
  let referee: Referee;

  beforeAll(() => {
    comparator = new BaseballNumbersComparator();
    referee = new Referee(comparator);
  });

  describe("judge()", () => {
    test("스트라이크와 볼 개수를 반환한다.", () => {
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(5),
        new BaseballNumber(2),
      ]); 

      const result = referee.judge(guess, answer);

      expect(result.strike).toBe(1);
      expect(result.ball).toBe(1);
    });
  });

  describe("isAnswer()", () => {
    test("추측과 정답이 같다면 true를 리턴한다.", () => {
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

      const result = referee.isAnswer(guess, answer);
  
      expect(result).toBeTruthy();
    });

    test("추측과 정답이 다르다면 false를 리턴한다.", () => {
      const guess = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      const answer = new BaseballNumbers([
        new BaseballNumber(4),
        new BaseballNumber(5),
        new BaseballNumber(6),
      ])

      const result = referee.isAnswer(guess, answer);
  
      expect(result).toBeFalsy();
    });
  })
});

