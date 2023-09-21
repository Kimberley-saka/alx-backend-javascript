const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
      assert.strictEqual(calculateNumber(1, 3.7), 5);
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  
    it('Handle negative numbers', function () {
      assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });
  
    it('Handle zero', function () {
      assert.strictEqual(calculateNumber(0, 0), 0);
      assert.strictEqual(calculateNumber(0, 5), 5);
      assert.strictEqual(calculateNumber(-2.5, 0), -2);
    });
  });