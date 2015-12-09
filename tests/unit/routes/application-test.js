import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | Application');

function cookie_mock () {
  return {
    cookies: {'extant_key': 'Hello!'},
    getCookie: function(key) {
      if (this.cookies[key]) {
        return this.cookies[key];
      }
      return null;
    },
    setCookie: function(key, value) {
      this.cookies[key] = value;
    }
  };
}

test('beforeModel sets oauth token from cookie', function (assert) {
  assert.expect(2);
  var sut = this.subject(),
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

