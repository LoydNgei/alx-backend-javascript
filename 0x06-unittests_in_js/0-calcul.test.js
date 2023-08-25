const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Calculation test', function() {
    it('checks if RoundOf a works properly', function() {
        assert.equal(calculateNumber(1.2, 3), 4);
        assert.equal(calculateNumber(1.7, 10), 12);
        assert.equal(calculateNumber(1.5, 97), 99);
        assert.equal(calculateNumber(1.2, 34), 35);
        assert.equal(calculateNumber(1.75, 129), 131);
    });
    it('checks if RoundOf b works properly', function() {
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(15, 10.7), 26);
        assert.equal(calculateNumber(100, 91.5), 192);
        assert.equal(calculateNumber(12, 34.2), 46);
        assert.equal(calculateNumber(175, 129.2), 304);
    });
});
