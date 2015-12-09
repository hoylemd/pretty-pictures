import Ember from 'ember';

export default Ember.Route.extend({
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
