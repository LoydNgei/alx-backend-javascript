const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('Stub the SUM type', function() {
        const stubSum = sinon.stub(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        stubSum.withArgs('SUM', 100, 20).returns(120);
        expect(console.log('The total is: 120')).to.be.all;
        stubSum.restore();
    });
});