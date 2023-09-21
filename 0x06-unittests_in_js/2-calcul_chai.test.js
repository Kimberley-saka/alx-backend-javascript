const {expect} = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('add rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT operation', function () {
    it('subtract rounded b from a', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 5, 2.5)).to.equal(2);
    });
  });

  describe('DIVIDE operation', function () {
    it('divide a by rounded b', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('handle division by zero', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});
