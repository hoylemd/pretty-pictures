import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:application');

test('Application controller has app name', function(assert) {
  var sut = this.subject();
  assert.equal(sut.get('app_name'), 'Pretty Pictures', "App title is present");
});
