import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 11', function () {
  describe('part 1', function () {
    it('your total score should be 10605', function () {
      expect(part1(dataTest)).to.be.equal(10605);
    });
  });

  describe('part 2', function () {
    it('your total score should be the 2713310158', function () {
      expect(part2(dataTest)).to.be.equal(2713310158);
    });
  });

});
