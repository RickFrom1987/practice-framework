const assert = require('assert');
const PromisePractice = require('./PromisePractice');

describe('Promise Practice', function() {
  const pp = new PromisePractice();

  describe('#Check email', function() {
    it('should return a success when checkEmail promise is returned', (done) => {
      const checkEmailPromise = pp.checkEmail('rick@rickfrom1987.com');
      checkEmailPromise.then((value) => {
        assert.equal(value, 'email-success');
      }).catch((err) => {
        assert(false);
      }).then(done, done); // Mocha timeout issue
    });
  });

  describe('#Send analytics', function() {
    it('should return a success when analytics is done', (done) => {
      const sendAnalyticsPromise = pp.sendAnalytics('source');
      sendAnalyticsPromise.then((value) => {
        assert.equal(value, 'analytics-success');
      }).catch((err) => {
        assert(false);
      }).then(done, done); // Mocha timeout issue
    });
  });

  describe('#Make sure both actions resolve before doing another action', function() {
    it('should do actions in the right order', (done) => {
      const checkEmail = pp.checkEmail('rick@rickfrom1987.com');
      const sendAnalytics = pp.sendAnalytics('source');
      const actions = [checkEmail, sendAnalytics];
      Promise.all(actions)
        .then((value) => {
          // Check is both email is a success and analytics is a success before doing the next thing!
          assert.deepEqual(value, ['email-success', 'analytics-success']);
        })
        .catch((err) => {
          assert(false);
        })
        .then(done, done); // Mocha timeout issue
    });
  });

});