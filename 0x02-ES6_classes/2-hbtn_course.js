/* eslint-disable class-methods-use-this */

class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArray(students, 'Students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'Students');
  }

  _validateString(value, propName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propName} must be a string`);
    }
    return value;
  }

  _validateNumber(value, propName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propName} must be a number`);
    }
    return value;
  }

  _validateArray(value, propName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${propName} must be an array`);
    }
    return value;
  }
}

export default HolbertonCourse;
