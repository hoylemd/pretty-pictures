import Ember from 'ember';

export default Ember.Controller.extend({
  app_name: "Pretty Pictures",
  app_headline: "The 100 prettiest pictures on 500px!",

  oauth_token_temp: "",
  oauth_token: Ember.computed.alias('model.oauth_token'),
  auth_requested: false,
  sdk_key: '2dfd95b628eadeeee64dc57b6094323ea04fc3a2',

  actions: {
    'login': function() {
      var sdk_key = this.get('sdk_key'),
        site_url = 'https://api.500px.com/api/js-sdk/authorize',
        left_offset = (screen.width / 2) - (1240 / 2),
        top_offset = (screen.height / 2) - (480 / 2),
        auth_location = (site_url + '?sdk_key=' + sdk_key);
      window.open(auth_location,
                  '500px_js_sdk_login',
                  'width=1240,height=480,left=' + left_offset + ',top=' +
                  top_offset +
                  ',menu=no,location=yes,scrollbars=no,status=no,toolbar=no');
      this.set('auth_requested', true);
    },
    'logout': function () {
      var controller = this;
      controller.set('oauth_token', '');
      this.get('cookie').setCookie('oauth_token', '').then(function () {
        controller.set('oauth_token_temp', '');
        controller.set('auth_requested', false);
      });
    },
    'save_access_token': function () {
      var cookie = this.get('cookie'),
          token = this.get('oauth_token_temp'),
          controller = this;

      this.set('oauth_token', token);
      cookie.setCookie('oauth_token', token)
        .then(function() {
          controller.set('oauth_token_temp', '');
          controller.set('auth_requested', false);
        });
    }
  }
});
