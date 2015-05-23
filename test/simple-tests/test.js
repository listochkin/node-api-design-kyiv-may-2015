const { assert, expect } = require('chai'),
  co = require('co'),
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

  const dom = html => new Promise((resolve, reject) => {
    return jsdom.env(html, (error, window) => error ? reject(error) : resolve(window))
  });

  const [ get, post ] = ['get', 'post'].map(verb => {
    return options => new Promise((resolve, reject) => {
      return request[verb](options, (error, response) => {
        return error ? reject(error) : resolve(response);
      });
    });
  });

  it('Should run async test with promises and generators', (done) => {
    co(function* () {
      const { statusCode, body: html } = yield get('https://nodejs.org/dist/');
      expect(statusCode).to.equal(200);
      const window = yield dom(html);
      const links = window.document.querySelectorAll('a');
      expect(links.length).to.equal(256);
      // const [ gr, yr ] = yield [get('https://google.com'), get('http://ya.ru')];
    }).catch(done).then(done);
  });
});
