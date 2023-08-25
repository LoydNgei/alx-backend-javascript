const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Int check', function() {
    it('Checks if inputs are ints', function() {
        function isInteger(n) {
            return Number.isInteger(n);
        }

        assert.strictEqual(isInteger(calculateNumber(1, 3)), true)
        assert.strictEqual(isInteger(calculateNumber(1, 3.7)), true)
        assert.strictEqual(isInteger(calculateNumber(1.2, 3.7)), true)
        assert.strictEqual(isInteger(calculateNumber(1.5, 3.7)), true)
    })
})
describe('Calculation test', function() {
    it('checks if RoundOf works perfectly', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
