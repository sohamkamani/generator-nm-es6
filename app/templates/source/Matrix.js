'use strict';
import assign from 'object-assign';
import isMatrix from './validations/isMatrix';

let Matrix = function (arr) {
  if(!(this instanceof Matrix)){
    return new Matrix(arr);
  }

  if (!isMatrix(arr)) {
    throw new Error('Array is not a matrix');
  }

  /*
  Building Core Matrix object
  */
  const value = () => arr;
  const dimensions = {
    m: arr.length,
    n: arr[0].length
  };

  let coreObject = {
    value,
    dimensions,
    isMatrix: true
  };
  assign(this, coreObject);
};

module.exports = Matrix;


const dotOperations = require('./lib/dot-operations');
const isSquare = require('./validations/isSquare');
const createArray = require('./lib/create');
const multiply = require('./lib/multiply');
const subMatrix = require('./lib/submatrix');

/*
Building exposed validations
*/
let validations = {
  isSquare
};

/*
Matrix cross operations
*/
let crossOperations = {
  subMatrix,
  multiply
};
/*
Building Matrix object from various modules
*/
assign(Matrix.prototype, dotOperations, validations, crossOperations);


/*
  Static methods
*/

Matrix.ones = (m, n) => {
  return Matrix(createArray({
    m, n
  }, 1));
};

Matrix.zeros = (m, n) => {
  return Matrix(createArray({
    m: m,
    n: n
  }, 0));
};
