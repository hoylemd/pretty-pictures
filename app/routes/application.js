import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var cookie = this.get('cookie'),
      token = cookie.getCookie('oauth_token');

    if(token) {
      this.set('oauth_token', token);
    } else {
      this.transitionTo('login');
    }
  },
  model: function() {
    return {oauth_token: this.get('oauth_token')};
  },
  actions: {
    'complete_authorization': function(token){
      var route = this;
      this.set('oauth_token', token);
      this.transitionTo('home').then(function () {
        route.refresh();
      })
    },
    'logout': function() {
      var route = this;
      this.set('oauth_token', '');
      this.get('cookie').setCookie('oauth_token', '').then(function () {
        route.refresh();
      });
    }
  }
 });
