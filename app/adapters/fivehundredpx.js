import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.501px.com',
  namespace: 'v1',

  buildUrl: function() {
    // ihttps://api.500px.com/v1/photos?feature=popular&image_size=&rpp=100
    var modelName = 'photos',
      feature = 'popular',
      rpp = 100,
      url = host + '/' + namespace + '/' + modelName;

    return url + '?feature=' + feature + '&rpp=' + rpp;
  }

});
