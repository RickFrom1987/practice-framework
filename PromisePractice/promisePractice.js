class PromisePractice {
  constructor() {}
  checkEmail(email) {
    const checkPromise = new Promise((resolve, reject) => {
      // Fake network requests
      setTimeout(() => {
        if (email) {
          resolve('email-success');
        } else {
          reject('email-fail');
        }
      }, 200);
    });
    return checkPromise;
  }
  sendAnalytics(src) {
    const sendAnalyticsPromise = new Promise((resolve, reject) => {
      // Fake network requests
      setTimeout(() => {
        if (src) {
          resolve('analytics-success');
        } else {
          reject('analytics-fail');
        }
      }, 300);
    });
    return sendAnalyticsPromise;
  }
}

module.exports = PromisePractice;