'use strict';
import { install } from 'source-map-support';
install();
import {expect, assert} from 'chai';
import Matrix from '../source/Matrix';

describe('Matrix', function(){
  it('should be an instance of matrix', ()=>{
    expect(Matrix([[0]]) instanceof Matrix).to.equal(true);
  });

  it('should throw an error for an invalid matrix', ()=>{
    expect(()=> Matrix(null)).to.throw(Error);
  });

  it('should return value of matrix', ()=>{
    assert.deepEqual(Matrix([[1]]).value(), [[1]]);
  });

  it('should return correct dimensions', ()=>{
    let mat2x2 = [[1,1],[1,1]];
    let mat2x1 = [[1],[1]];
    assert.deepEqual(Matrix(mat2x2).dimensions, {m: 2, n: 2});
    assert.deepEqual(Matrix(mat2x1).dimensions, {m: 2, n: 1});
  });

  it('should add another matrix', ()=>{
    let mat1 = Matrix([[1],[1]]);
    let mat2 = Matrix([[1],[1]]);
    assert.deepEqual(mat1.add(mat2).value(),[[2],[2]]);
  });

  it('should subtract another matrix', ()=>{
    let mat1 = Matrix([[1],[1]]);
    let mat2 = Matrix([[1],[1]]);
    assert.deepEqual(mat1.subtract(mat2).value(),[[0],[0]]);
  });

  it('should dot multiply another matrix', ()=>{
    let mat1 = Matrix([[1],[1]]);
    let mat2 = Matrix([[1],[1]]);
    assert.deepEqual(mat1.dotMultiply(mat2).value(),[[1],[1]]);
  });

  it('should dot divide another matrix', ()=>{
    let mat1 = Matrix([[1],[1]]);
    let mat2 = Matrix([[1],[1]]);
    assert.deepEqual(mat1.dotDivide(mat2).value(),[[1],[1]]);
  });

  it('should throw error while adding matrix of wrong dimensions', ()=>{
    let mat1 = Matrix([[1],[1]]);
    let mat2 = Matrix([[1]]);
    expect(()=> mat1.add(mat2)).to.throw(Error);
  });
});
