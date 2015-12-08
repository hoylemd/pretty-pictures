import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:fivehundredpx', 'Unit | Adapter | fivehundredpx', {
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

test('buildUrl builds a 500px photos query url', function(assert) {
  let adapter = this.subject(),
    expected_url = "https://api.500px.com/v1/photos?feature=popular&rpp=100";

  assert.ok(adapter.buildUrl() === expected_url, "Url was built correctly");
});
