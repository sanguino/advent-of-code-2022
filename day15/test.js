import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 15', function () {
  describe('part 1', function () {
    it('your total score should be 26', function () {
      expect(part1(dataTest, 10)).to.be.equal(26);
    });
  });

  describe('part 2', function () {
    it('your total score should be the 56000011', function () {
      expect(part2(dataTest, 20)).to.be.equal(56000011);
    });
  });

});
