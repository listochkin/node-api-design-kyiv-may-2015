API Design with Node.js
=======================

Code Samples for API design with Node JS class - Kiyv, May 16, 2015

Running the Examples
--------------------

We used latest version of [iojs][1] (2.0.2) for our class.

 1. Tests: `npm test` or `npm run watch`
 2. Realtime streaming `cd messenger` and then `node server.js`

Further reading
---------------

### REST

 1. [Haters gonna HATEOAS][2]
 2. [Four Levels of REST][3]
 3. [Best Practices for Designing a Pragmatic RESTful API][4]
 4. [jsonapi.org][5] and [Building Ambitious APIs with Ruby][6]

### Backend-as-a-Service

 1. [Parse][7] and [Firebase][8]
 2. [LoopBack][9]
 3. [DeployD][10]
 4. [NoBackend][11]

### Streaming API

 1. [Harnessing The Awesome Power Of Streams][12]
 2. [Stream Handbook][13]
 3. [Stream Adventure][14]

### Authorization and Authentication

 1. [Using secure client-side sessions to build simple and scalable Node.JS applications][15] (see also https://github.com/mozilla/node-client-sessions#cryptography)
 2. [JSON Web Token Spec Draft][16]
 3. [Cookies vs. Tokens][17] and [10 Things You Should Know about Tokens][18]
 4. [WebSocket Security][19]
 5. [Token-based Authentication with Socket.IO][20]
 6. [HTTP Hawk Authentication Scheme][21]

### Node Aesthetics

 1. [The Way of Node][22]
 2. [Node Aesthetics][23]
 3. [Style Guide][24]
 4. [Re: @brixen’s “Is Node Better”][25]
 5. [Unix Philosophy and Node.js][26]

### Running Node in Production

 1. [Restart Node.js servers on domain errors: Sensible FUD][27]
 2. [Node.js Production Practices][28]
      - [Error Handling in Node.js][29]
      - [Debug][30]
      - [Deploy][31]
 3. [PM2][32]
 4. [Control V8 Garbage Collection][33]
 5. Monitoring Node Applications:
      - [NewRelic][34]
      - [StrongOps][35]
      - [NodeTime][36]

### Where to run Node?

 1. Free Development Pipeline:
      - [BitBucket][37]
      - [CodeShip][38]
      - [Heroku][39] priced per app. Only 18 hours per day on free plan
      - NewRelic
 2. Paid alternatives:
      - [Modulus][40] Node + Mongo + Buil-in Performance Stats
      - [Circle CI][41] - unlimited builds/users/repos free. Requires Github ($7)
      - [Nodejitsu NPM][42] - 10 private packages $25
      - DigitalOcean
      - Joyent Manta & SmartOS
 3. Your own PaaS
      - [Dokku][43] uses Heroku Build Packs. Single host only.
      - [Deis][44]
      - [nscale][45]


  [1]: https://iojs.org/en/index.html
  [2]: http://timelessrepo.com/haters-gonna-hateoas
  [3]: http://martinfowler.com/articles/richardsonMaturityModel.html
  [4]: http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
  [5]: http://jsonapi.org/
  [6]: https://www.youtube.com/watch?v=2t-_7Eo4DnI
  [7]: https://www.parse.com/
  [8]: https://www.firebase.com/
  [9]: http://loopback.io/
  [10]: http://deployd.com/
  [11]: http://nobackend.org/
  [12]: https://www.youtube.com/watch?v=lQAV3bPOYHo
  [13]: https://github.com/substack/stream-handbook
  [14]: https://github.com/substack/stream-adventure
  [15]: https://hacks.mozilla.org/2012/12/using-secure-client-side-sessions-to-build-simple-and-scalable-node-js-applications-a-node-js-holiday-season-part-3/
  [16]: http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html
  [17]: https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/
  [18]: https://auth0.com/blog/2014/01/27/ten-things-you-should-know-about-tokens-and-cookies/
  [19]: https://devcenter.heroku.com/articles/websocket-security
  [20]: https://auth0.com/blog/2014/01/15/auth-with-socket-io/
  [21]: https://github.com/hueniverse/hawk
  [22]: http://futurealoof.com/posts/the-way-of-node.html
  [23]: http://substack.net/node_aesthetic
  [24]: https://gist.github.com/dominictarr/2401787
  [25]: http://blog.izs.me/post/20786279320/re-brixens-is-node-better
  [26]: http://blog.izs.me/post/48281998870/unix-philosophy-and-node-js
  [27]: http://blog.izs.me/post/65712662830/restart-node-js-servers-on-domain-errors-sensible-fud
  [28]: https://www.joyent.com/developers/node
  [29]: https://www.joyent.com/developers/node/design/errors
  [30]: https://www.joyent.com/developers/node/debug
  [31]: https://www.joyent.com/developers/node/deploy
  [32]: https://github.com/Unitech/pm2
  [33]: https://gist.github.com/listochkin/10973974
  [34]: https://newrelic.com/nodejs
  [35]: http://strongloop.com/node-js/controller/
  [36]: https://nodetime.com/
  [37]: https://bitbucket.org/
  [38]: https://codeship.com/
  [39]: https://www.heroku.com/pricing
  [40]: https://modulus.io
  [41]: https://circleci.com/pricing
  [42]: https://www.nodejitsu.com/npm/
  [43]: https://github.com/progrium/dokku
  [44]: http://deis.io
  [45]: http://nscale.nearform.com/
