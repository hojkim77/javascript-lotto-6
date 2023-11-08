import { Random } from '@woowacourse/mission-utils';
import { LottoConstants, LottoPrizes } from './constants/Constants';
class Generator {
  static randomNumbersGenerator(purchaseAmount) {
    const result = [];

    for (let index = 0; index < purchaseAmount; index++) {
      const sortedRandomNumbers = Random.pickUniqueNumbersInRange(
        LottoConstants.MIN_NUM,
        LottoConstants.MAX_NUM,
        LottoConstants.LENGTH
      ).sort((num1, num2) => num1 - num2);
      result.push(sortedRandomNumbers);
    }

    return result;
  }

  static lottoCountGenerator(userNumbers, lottoNumbers) {
    const countNumbers = userNumbers.filter((number) =>
      lottoNumbers.includes(number)
    );
    const count = countNumbers.length < 3 ? null : countNumbers.length;

    return count;
  }

  static isBonusGenerator(userNumbers, bonusNumber) {
    return userNumbers.includes(bonusNumber) ? true : false;
  }

  static profitGenerator(lottoCount, isBonus) {
    switch (lottoCount) {
      case 3:
        return LottoPrizes.THREE_EQUAL;
      case 4:
        return LottoPrizes.FOUR_EQUAL;
      case 5:
        return isBonus
          ? LottoPrizes.FIVE_EQUAL_AND_BONUS
          : LottoPrizes.FIVE_EQUAL;
      case 6:
        return LottoPrizes.SIX_EQUAL;
    }
  }
}

export default Generator;
