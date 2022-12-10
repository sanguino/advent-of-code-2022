import { dataTest } from './data.js';
import { part1, part2 } from './code.js';
import { expect } from 'chai';

const theSprite = `##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`;

describe('day 10', function () {
  describe('part 1', function () {
    it('your total score should be 13140', function () {
      expect(part1(dataTest)).to.be.equal(13140);
    });
  });

  describe('part 2', function () {
    it('your total score should be the sprite', function () {
      expect(part2(dataTest)).to.be.equal(theSprite);
    });
  });

});
