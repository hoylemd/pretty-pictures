import Ember from 'ember';

export default Ember.Route.extend({
  app_name: "Pretty Pictures",
  app_headline: "The 100 prettiest pictures on 500px!",

  beforeModel: function() {
    var cookie = this.get('cookie'),
      token = cookie.getCookie('oauth_token');

    if(token) {
      this.set('oauth_token', token);
    }
  },
  model: function() {
    return {oauth_token: this.get('oauth_token')};
  }
 });
