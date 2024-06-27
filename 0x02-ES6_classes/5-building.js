export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor.name !== 'Building' && this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(num) {
    if (typeof num === 'number') {
      this._sqft = num;
    } else {
      throw new Error('Sqft must be a number');
    }
  }
}
