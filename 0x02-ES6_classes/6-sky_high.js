/* eslint-disable class-methods-use-this */

import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
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
    return ('Evacuate slowly the NUMBER_OF_FLOORS floors');
  }
}

export default SkyHighBuilding;
