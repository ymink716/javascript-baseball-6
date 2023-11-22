import { MockRandoms } from '../src/models/utils/MockRandoms';
import BaseballGameController from '../src/controllers/BaseballGameController';
import IntroView from '../src/views/IntroView';
import Referee from '../src/models/Referee';
import GusessView from '../src/views/GuessView';
import RegameView from '../src/views/RegameView';
import Host from '../src/models/Host';
import BaseballNumbersGenerator from '../src/models/BaseballNumbersGenerator';
import { Comparator } from '../src/models/interface/Comparator';
import BaseballNumbersComparator from '../src/models/BaseballNumbersComparator';
import { Randoms } from '../src/models/interface/Randoms';
import BaseballNumbers from '../src/models/vo/BaseballNumbers';
import BaseballNumber from '../src/models/vo/baseballNumber';

describe("BaseballGameController", () => {
  let baseballGameController: BaseballGameController;
  let referee: Referee;
  let host: Host;
  let baseballNumbersGenerator: BaseballNumbersGenerator; 
  let comparator: Comparator;
  let randoms: Randoms;
  
  beforeAll(() => {
    comparator = new BaseballNumbersComparator();
    referee = new Referee(comparator);
    host = new Host();
    randoms = new MockRandoms();
    baseballNumbersGenerator = new BaseballNumbersGenerator(randoms);
    baseballGameController = new BaseballGameController(referee, host, baseballNumbersGenerator);
  });
  
  describe("startBaseballGame()", () => {
    test("정답 숫자를 생성한다.", async () => {
      await baseballGameController.startBaseballGame();

      expect(baseballGameController['answer']).toBeDefined();
    });

    test("게임 시작을 알리는 view를 보여준다.", async () => {
      jest.spyOn(IntroView, 'announceBeginning');

      await baseballGameController.startBaseballGame();

      expect(IntroView.announceBeginning).toHaveBeenCalled();
    });
  });

  describe("guessNumbers()", () => {
    test("추측한 숫자를 입력하는 view를 제공한다.", async () => {
      jest.spyOn(GusessView, 'guessNumbers').mockImplementationOnce(async () => [1, 2, 3]);

      await baseballGameController.guessNumbers();

      expect(GusessView.guessNumbers).toHaveBeenCalled();
    });

    test("view에서 입력받은 값으로 baseballNumbers를 생성한다.", async () => {
      const numbers = [1, 2, 3];
      jest.spyOn(GusessView, 'guessNumbers').mockImplementationOnce(async () => numbers);
      
      await baseballGameController.guessNumbers();

      expect(baseballGameController['guess']).toBeDefined();
    });
  });

  describe("isAnswer()", () => {
    test("추측과 정답이 같다면 true를 리턴한다.", async () => {
      baseballGameController['guess'] = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      baseballGameController['answer'] = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);

      const result = await baseballGameController.isAnswer();
  
      expect(result).toBeTruthy();
    });

    test("추측과 정답이 다르다면 false를 리턴한다.", async () => {
      baseballGameController['guess'] = new BaseballNumbers([
        new BaseballNumber(1),
        new BaseballNumber(2),
        new BaseballNumber(3),
      ]);
      baseballGameController['answer'] = new BaseballNumbers([
        new BaseballNumber(4),
        new BaseballNumber(5),
        new BaseballNumber(6),
      ]);

      const result = await baseballGameController.isAnswer();
  
      expect(result).toBeFalsy();
    });
  });

  describe("askRegame()", () => {
    test("게임을 새로 시작할지 묻는 view를 제공한다.", async () => {
      jest.spyOn(RegameView, 'askRegame').mockResolvedValueOnce('1');
      
      await baseballGameController.askRegame();

      expect(RegameView.askRegame).toHaveBeenCalled();
    });

    test("새 게임을 시작한다면 true를 반환한다.", async () => {
      jest.spyOn(RegameView, 'askRegame').mockResolvedValueOnce('1');
      
      const result = await baseballGameController.askRegame();

      expect(result).toBeTruthy();
    });

    test("새 게임을 시작하지 않는다면 false를 반환한다.", async () => {
      jest.spyOn(RegameView, 'askRegame').mockResolvedValueOnce('2');
      
      const result = await baseballGameController.askRegame();

      expect(result).toBeFalsy();
    });
  });
});