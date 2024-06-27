// Import the Building class from another module
import Building from './5-building';

// Create a subclass SkyHighBuilding that extends the Building class
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the constructor of the parent class Building and pass sqft
    super(sqft);
    // Add a property _floors specific to SkyHighBuilding
    this._floors = floors;
  }

  // Define a getter method to retrieve the number of floors
  get floors() {
    return this._floors;
  }

  // Define a method to generate an evacuation warning message
  evacuationWarningMessage() {
    // Create a message indicating the evacuation process based on the number of floors
    return `Evacuate the building calmly. There are ${this.floors} floors to cover.`;
  }
}
