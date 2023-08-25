const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let spyHook;
    beforeEach(() => {
        spyHook = sinon.spy(console, 'log');
    });
    afterEach(() => {
        sinon.restore();
    });

    it('Verify the console is logging correct string', function() {
        sendPaymentRequestToApi(100, 20);
        expect(spyHook.calledOnce).to.be.true;
        expect(spyHook.calledWith('The total is: 120')).to.be.true;
    });

    it('Verify the console is logging correct string', function() {
        sendPaymentRequestToApi(10, 10);
        expect(spyHook.calledOnce).to.be.true;
        expect(spyHook.calledWith('The total is: 20')).to.be.true;
    });
});