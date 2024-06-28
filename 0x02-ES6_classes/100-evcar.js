import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Create and return a new Car instance with EVCar's properties
    return new Car(this._brand, this._motor, this._color);
  }
}
