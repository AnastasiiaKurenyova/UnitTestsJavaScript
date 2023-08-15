import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isInteger test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided integer', () => {
    const validationResults = validator.isInteger(120);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided not integer', () => {
    const validationResults = validator.isInteger(120.5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when not integer provided', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});
