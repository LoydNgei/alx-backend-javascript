const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('Calculation test', function() {

   it('Checks the type: SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
   });

   it('Checks the type: SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
   });

    it('Checks the type: DIVIDE', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});


