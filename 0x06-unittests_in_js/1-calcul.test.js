const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('add rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT operation', function () {
    it('subtract rounded b from a', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 2.5), 2);
    });
  });

  describe('DIVIDE operation', function () {
    it('divide a by rounded b', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('handle division by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });
});
