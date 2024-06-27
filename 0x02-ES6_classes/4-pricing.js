import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(num) {
    if (typeof num === 'number') {
      this._amount = num;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  set currency(curr) {
    if (curr instanceof Currency) {
      this._currency = curr;
    } else {
      throw new Error('Currency must be an instance of a class');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
