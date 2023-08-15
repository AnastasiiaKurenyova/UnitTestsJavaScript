import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isAllNumbers test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided array with all numbers', () => {
    const validationResults = validator.isAllNumbers([5, 7.8, 120, -1]);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided array with not all numbers', () => {
    const validationResults = validator.isAllNumbers([5, 7.8, 'text', 120, -1]);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when not array provided', () => {
    expect(() => {
      validator.isAllNumbers('4');
    }).to.throw('[4] is not an array');
  });
});
