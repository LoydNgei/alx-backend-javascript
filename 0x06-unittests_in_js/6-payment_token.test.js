const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Check if its an instance of Promise', () => {
    const res = getPaymentTokenFromAPI();
    expect(res).to.be.an.instanceof(Promise);
  });

  it("Check if returns the JSON format as instructed", () => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res.data).to.be.equal('Successful response from the API');
        done();
      });
  });

  it('Check if it returns nothing on failure as instructed', () => {
    getPaymentTokenFromAPI(false)
      .then((res) => {
        expect(res).to.equal('');
      });
  });
  
});