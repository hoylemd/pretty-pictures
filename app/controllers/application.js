import Ember from 'ember';

export default Ember.Controller.extend({
  app_name: "Pretty Pictures",
  app_headline: "The 100 prettiest pictures on 500px!",

  oauth_token: Ember.computed.alias('model.oauth_token'),
});
