import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('getEvenNumbersFromArray test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return array with even numbers', () => {
    const validationResults = validator
        .getEvenNumbersFromArray([2, 120, 5, 79, 80]);
    expect(validationResults).to.have.same.members([2, 120, 80]);
  });

  it('should return array with zero', () => {
    const validationResults = validator
        .getEvenNumbersFromArray([0, 0, 0]);
    expect(validationResults).to.have.same.members([0, 0, 0]);
  });

  it('should throw an error when not array provided', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(42);
    }).to.throw('[42] is not an array');
  });
});
