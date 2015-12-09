import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var cookie = this.get('cookie'),
      token = cookie.getCookie('oauth_token');

    if(token) {
      this.transitionTo('home');
    }
 }
});
