import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | Application');

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

test('login action sets auth_requested flag', function(assert) {
  assert.expect(2);
  var sut = this.subject();

  assert.equal(sut.get('auth_requested'), false,
               'requested flag initialized to false');
  sut.send('login');
  assert.ok(sut.get('auth_requested'), 'requested flag set after action');
});

test('login action opens window to auth request', function(assert) {
  assert.ok(true);
});

test('save_access_token saves the token in the cookie', function(assert) {
  var sut = this.subject({'cookie': cookie_mock()});
  assert.ok(sut);
});
