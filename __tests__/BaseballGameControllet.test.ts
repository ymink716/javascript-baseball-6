import BaseballGameController from '../src/controllers/BaseballGameController';
import Answer from '../src/models/Answer';
import IntroView from '../src/views/IntroView';
import Guess from '../src/models/Guess';
import Referee from '../src/models/Referee';
import ResultView from '../src/views/ResultView';
import GusessView from '../src/views/GuessView';
import RegameView from '../src/views/RegameView';
import Host from '../src/models/Host';
import { NOTHING } from '../src/common/constants';

jest.mock('../src/models/Answer');
jest.mock('../src/views/IntroView');
jest.mock('../src/models/Guess');
jest.mock('../src/models/Referee');
jest.mock('../src/views/ResultView');

describe("BaseballGameController", () => {
  let baseballGameController: BaseballGameController;
  
  beforeAll(() => {
    baseballGameController = new BaseballGameController();
  });
  
  describe("startBaseballGame()", () => {
    test("정답 숫자를 생성한다.", async () => {
      await baseballGameController.startBaseballGame();

      expect(Answer).toHaveBeenCalled();
    });

    test("게임 시작을 알리는 view를 보여준다.", async () => {
      jest.spyOn(IntroView.prototype, 'announceBeginning');

      await baseballGameController.startBaseballGame();

      expect(IntroView.prototype.announceBeginning).toHaveBeenCalled();
    });
  });

  describe("guessNumbers()", () => {
    test("추측한 숫자를 입력하는 view를 제공한다.", async () => {
      jest.spyOn(GusessView.prototype, 'guessNumbers').mockImplementation(async () => [1, 2, 3]);

      await baseballGameController.guessNumbers();

      expect(GusessView.prototype.guessNumbers).toHaveBeenCalled();
    });

    test("view에서 입력받은 값을 Guess 모델을 만든다.", async () => {
      jest.spyOn(GusessView.prototype, 'guessNumbers').mockImplementation(async () => [1, 2, 3]);
      await baseballGameController.guessNumbers();

      expect(Guess).toHaveBeenCalledWith([1, 2, 3]);
    });
  });

  describe("judgeResult()", () => {
    test("추측한 숫자와 정답 숫자로 결과를 판단한다.", async () => {
      await baseballGameController.startBaseballGame();
      jest.spyOn(GusessView.prototype, 'guessNumbers').mockResolvedValue([1, 2, 3]);
      await baseballGameController.guessNumbers();

      jest.spyOn(Guess.prototype, 'getNumbers').mockReturnValueOnce([1, 2, 3])
      jest.spyOn(Answer.prototype, 'getNumbers').mockReturnValueOnce([4, 5, 6]);
      jest.spyOn(Referee.prototype, 'judge');
  
      await baseballGameController.judgeResult();
  
      expect(Referee.prototype.judge).toHaveBeenLastCalledWith([1, 2, 3], [4, 5, 6]);
    });

    test("결과 값을 view에 전달하고 보여준다.", async () => {
      await baseballGameController.startBaseballGame();
      jest.spyOn(GusessView.prototype, 'guessNumbers').mockResolvedValue([1, 2, 3]);
      await baseballGameController.guessNumbers();

      jest.spyOn(Answer.prototype, 'getNumbers').mockReturnValueOnce([4, 5, 6]);
      jest.spyOn(Referee.prototype, 'judge').mockReturnValue(NOTHING);
      jest.spyOn(ResultView.prototype, 'printResult');

      await baseballGameController.judgeResult();

      expect(ResultView).toHaveBeenCalledWith(NOTHING);
      expect(ResultView.prototype.printResult).toHaveBeenCalled();
    });
  });

  describe("askRegame()", () => {
    test("게임을 새로 시작할지 묻는 view를 제공한다.", async () => {
      jest.spyOn(RegameView.prototype, 'askRegame').mockResolvedValue('1');
      
      await baseballGameController.askRegame();

      expect(RegameView.prototype.askRegame).toHaveBeenCalled();
    });

    test("view에서 전달받은 값에 따라 host의 비지니스 로직을 실행한다.", async () => {
      jest.spyOn(RegameView.prototype, 'askRegame').mockResolvedValue('1');
      jest.spyOn(Host.prototype, 'askRegame');

      await baseballGameController.askRegame();

      expect(Host.prototype.askRegame).toHaveBeenCalledWith('1');
    });
  });

  describe("prepareNewGame()", () => {
    test("새로운 정답 숫자를 생성한다.", async () => {
      await baseballGameController.startBaseballGame();

      expect(Answer).toHaveBeenCalled();
    });
  });
});