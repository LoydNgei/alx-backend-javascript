const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Calculation test', function() {
    it('checks if RoundOf works perfectly', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
