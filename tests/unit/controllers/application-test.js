import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | Application');

function cookie_mock (init_cookies) {
  var default_cookies = init_cookies || {'extant_key': 'Hello!'};
  return {
    cookies: default_cookies,
    getCookie: function(key) {
      return this.cookies[key];
    },
    setCookie: function(key, value) {
      this.cookies[key] = value;
      return {then: sinon.stub()};
    }
  };
}

test('login action sets auth_requested flag', function(assert) {
  assert.expect(2);
  var sut = this.subject();

  assert.equal(sut.get('auth_requested'), false,
               'requested flag initialized to false');
  sut.send('login');
  assert.ok(sut.get('auth_requested'), 'requested flag set after action');
});

test('login action opens window to auth request', function(assert) {
  var sut = this.subject(),
    expected_url = 'https://api.500px.com/api/js-sdk/authorize?sdk_key=';

  sut.set('sdk_key', 'foo');
  expected_url += 'foo';
  window.open = sinon.stub();

  sut.send('login');
  assert.ok(window.open.calledWith(expected_url),
            'window.open called to authorize endpoint');
});

test('logout action clears credentials and cookie', function(assert) {
  assert.expect(4);
  var sut = this.subject({'model': {'oauth_token': 'wootdaloot'}}),
    cookie_stub = cookie_mock({'oauth_token': 'wootdaloot'});
  sut.set('cookie', cookie_stub);

  sut.send('logout');
  assert.equal(cookie_stub.getCookie('oauth_token'), '', 'cookie is cleared');
  assert.equal(sut.get('oauth_token'), '', 'token cleared');
  assert.equal(sut.get('oauth_token_temp'), '', 'temporary token empty');
  assert.equal(sut.get('auth_requested'), '', 'request flag unset');

});

test('save_access_token saves the token in the cookie', function(assert) {
  assert.expect(2);
  var sut = this.subject({'model': {'oauth_token': ''}}),
    cookie_stub = cookie_mock();
  sut.set('cookie', cookie_stub);

  assert.ok(!cookie_stub.getCookie('oauth_token'),
            'oauth_token cookie not initialized');
  sut.set('oauth_token_temp', 'han_solo');
  sut.send('save_access_token');
  assert.equal(cookie_stub.getCookie('oauth_token'), 'han_solo',
            'oauth_token cookie saved correctly');
});
