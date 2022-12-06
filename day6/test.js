import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 6', function () {
  describe('part 1', function () {
    it('your total score should be [7,5,6,10,11]', function () {
      expect(dataTest.split('\n').map(part1)).to.be.deep.equal([7,5,6,10,11]);
    });
  });

  describe('part 2', function () {
    it('your total score should be [19,23,23,29, 26]', function () {
      expect(dataTest.split('\n').map(part2)).to.be.deep.equal([19,23,23,29, 26]);
    });
  });
});
