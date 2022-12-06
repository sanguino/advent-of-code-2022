import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 5', function () {
  describe('part 1', function () {
    it('your total score should be CMZ', function () {
      expect(part1(dataTest)).to.be.equal('CMZ');
    });
  });

  describe('part 5', function () {
    it('your total score should be MCD', function () {
      expect(part2(dataTest)).to.be.equal('MCD');
    });
  });
});
