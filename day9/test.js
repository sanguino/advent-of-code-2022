import { dataTest, dataTest2 } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 9', function () {
  describe('part 1', function () {
    it('your total score should be 13', function () {
      expect(part1(dataTest)).to.be.equal(13);
    });
  });

  describe('part 2', function () {
    it('your total score should be 1', function () {
      expect(part2(dataTest)).to.be.equal(1);
      expect(part2(dataTest2)).to.be.equal(36);
    });
  });

});
