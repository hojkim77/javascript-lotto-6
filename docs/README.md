# 로또

1000원으로 6개짜리 번호를 구매해, 로또 당첨 번호를 맞추는 프로그램

## 필요 기능

### 입력

Console.readLineAsync을 사용하여 필요로하는 입력을 받아온다.
이 때 모든 입력에 대한 예외처리는 필수이다.

- 구매 금액 입력
  1000원 단위의 입력을 받아야한다.

  :heavy_exclamation_mark:<예외처리>:heavy_exclamation_mark:

  1. 숫자가 아닌 경우
  2. 0 이하의 숫자인 경우
  3. 1000으로 나누어떨어지지 않는 숫자인 경우

- 로또 당첨 번호 입력

  :heavy_exclamation_mark:<예외처리>:heavy_exclamation_mark: (해당 예외처리는 ','로 입력값을 분리한 후 각 아이템에 대해 진행한다.)

  1. 숫자가 아닌 경우
  2. 1 ~ 45의 숫자가 아닌 경우

- 보너스 번호 입력

  :heavy_exclamation_mark:<예외처리>:heavy_exclamation_mark:

  1. 숫자가 아닌 경우
  2. 1 ~ 45의 숫자가 아닌 경우

### 게임 로직

- 구매 금액에 따른 구매 갯수만큼 무작위 6개 번호 생성
- 무작위 6개 번호들과 로또 당첨 번호 비교

### 출력

- 무작위 6개짜리 번호들 출력
- 무작위 6개 번호들과 로또 당첨 번호 비교 결과 출력
