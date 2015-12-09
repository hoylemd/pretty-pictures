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
  var route = this.subject(),
    cookie_stub = cookie_mock();
  route.set('cookie', cookie_stub);

  route.beforeModel();
  assert.ok(!route.get('oauth_token'),
            "doesn't set the oauth_token if it is not in a cookie");
  cookie_stub.setCookie('oauth_token', 'hoopydoop');
  route.beforeModel();
  assert.ok(route.get('oauth_token'),
            "sets the oauth_token if it is in a cookie");
});

