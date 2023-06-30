/* eslint-disable class-methods-use-this */

import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('Floor is a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newsqft) {
    this._sqft = newsqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(newfloors) {
    this._floors = newfloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
