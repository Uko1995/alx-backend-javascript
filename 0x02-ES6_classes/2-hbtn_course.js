export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    }
    throw new Error('Length must be a number');
  }

  get length() {
    return this._length;
  }

  set students(arr) {
    if (Array.isArray(arr) && arr.every((item) => typeof item === 'string')) {
      this._students = arr;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
