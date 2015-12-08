import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.500px.com',
  namespace: 'v1',

  buildUrl: function() {
    var modelName = 'photos',
      feature = 'popular',
      rpp = 100,
      url = this.get('host') + '/' + this.get('namespace') + '/' + modelName;

    return url + '?feature=' + feature + '&rpp=' + rpp;
  }

});
