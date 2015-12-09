import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | Application');

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

test('beforeModel sets oauth token from cookie', function (assert) {
  assert.expect(2);
  var sut = this.subject({
      transitionTo: sinon.stub().returns({then: sinon.stub()})}),
    cookie_stub = cookie_mock();
  sut.set('cookie', cookie_stub);

  sut.beforeModel();
  assert.ok(!sut.get('oauth_token'),
            "doesn't set the oauth_token if it is not in a cookie");
  cookie_stub.setCookie('oauth_token', 'hoopydoop');
  sut.beforeModel();
  assert.ok(sut.get('oauth_token'),
            "sets the oauth_token if it is in a cookie");
});

test('model returns the token', function(assert) {
  assert.expect(2);
  var sut = this.subject(),
    model = sut.model();

  assert.equal(model['oauth_token'], undefined,
               'Returns undefined before if it is not set');
  sut.set('oauth_token', 'jumping_pandas');
  model = sut.model();
  assert.equal(model['oauth_token'], 'jumping_pandas',
               'Returns filled token before if it is set');
});

test('logout action clears credentials and cookie', function(assert) {
  assert.expect(2);
  var sut = this.subject({'model': {'oauth_token': 'wootdaloot'}}),
    cookie_stub = cookie_mock({'oauth_token': 'wootdaloot'});
  sut.set('cookie', cookie_stub);

  sut.send('logout');
  assert.equal(cookie_stub.getCookie('oauth_token'), '', 'cookie is cleared');
  assert.equal(sut.get('oauth_token'), '', 'token cleared');

});

