import Generator from './Generator.js';
import ValidatorUtil from './validators/ValidatorUtil.js';

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.bonus = bonus;
  }

  #validate(numbers) {
    //ValidatorUtil.lengthValidate(numbers);
    ValidatorUtil.duplicationValidate(numbers, this.bonus);
  }

  getResult(userNumbers) {
    const lottoCount = Generator.lottoCountGenerator(
      userNumbers,
      this.#numbers
    );

    const isBonus = null;
    if (lottoCount === 5)
      isBonus = Generator.isBonusGenerator(userNumbers, this.bonus);

    return { lottoCount, isBonus };
  }
}

export default Lotto;
