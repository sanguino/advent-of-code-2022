import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 8', function () {
  describe('part 1', function () {
    it('your total score should be 21', function () {
      expect(part1(dataTest)).to.be.equal(21);
    });
  });

  describe('part 2', function () {
    it('your total score should be 8', function () {
      expect(part2(dataTest)).to.be.equal(8);
    });
  });

});
