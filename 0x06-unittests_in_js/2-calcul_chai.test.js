const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe('Calculation test', function() {

   it('Checks the type: SUM', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
   });

   it('Checks the type: SUBTRACT', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
   });

    it('Checks the type: DIVIDE', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});


