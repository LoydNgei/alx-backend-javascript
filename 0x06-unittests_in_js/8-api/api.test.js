const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Import the Express app instance

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', function() {
  describe('GET /', function() {
    it('should return correct status code', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should return correct result', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });

  // Add more test suites as needed
});
