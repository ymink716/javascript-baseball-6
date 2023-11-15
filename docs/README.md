## 구현할 기능 목록

### App

- 숫자 야구 게임 진행에 관련된 로직을 담당한다.

### BaseballGameController

- 뷰와 모델의 중개자 역할을 한다.

### Answer

- 정답 숫자를 생성한다.
- 정답 숫자를 제공한다.

### class BaseballNumbersGenerator 

- 숫자 야구에 필요한 임의의 숫자 리스트를 생성해준다.

### Guess

- 추측한 숫자를 생성한다.
- 추측한 숫자를 제공한다.


### Referee

- 스트라이크, 볼 여부를 가지고 결과를 판단한다. (낫싱, 3스트라이크, -볼 -스트라이크)

### BaseballNumbersComparator

- 추측한 숫자와 정답한 숫자를 비교하여 스트라이크, 볼 여부를 알려준다.

### Host

- 게임을 새로 시작할지 종료할지 묻는다.

### IntroView

- 게임 시작을 알리는 뷰

### GuessView

- 추측한 숫자를 입력받는 뷰

### ResultView

- 추측한 값의 결과를 보여주는 뷰

### RegameView

- 게임을 재시작할지 그만할지 묻는 뷰

