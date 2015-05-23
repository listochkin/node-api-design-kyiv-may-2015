const { assert, expect } = require('chai'),
  request = require('request'),
  jsdom = require('jsdom');

describe('Simple tests', () => {
  it('Should pass', () => {
    assert(1 == '1');
  });

  it('Should do an async test using callbacks', (done) => {
    request.get('https://nodejs.org/dist/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      jsdom.env(body, (error, window) => {
        const links = window.document.querySelectorAll('a');
        expect(links.length).to.equal(256);
        done();
      });
    });
  });
});
