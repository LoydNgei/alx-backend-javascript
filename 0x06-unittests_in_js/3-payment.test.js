const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('Spy if sum is okay', function() {
        const spyNo = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spyNo.calledOnce).to.be.true;
        expect(spyNo.calledWith('SUM', 100, 20)).to.be.true;
        spyNo.restore();
    });
});