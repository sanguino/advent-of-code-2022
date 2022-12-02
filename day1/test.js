import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

describe('day 1', function () {
  describe('part 1', function () {
    it('the Elf carrying the most Calories should carrying 24000', function () {
      expect(part1(dataTest)).to.be.equal(24000);
    });
  });

  describe('part 2', function () {
    it('the top three Elves carrying the most Calories should carrying 45000', function () {
      expect(part2(dataTest)).to.be.equal(45000);
    });
  });
});