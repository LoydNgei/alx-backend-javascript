class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Check when the class is cast into a Number
  valueOf() {
    return this._size;
  }

  // Check when the class is cast into a string
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
