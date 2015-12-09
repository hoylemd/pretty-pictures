import Ember from 'ember';
export function initialize(container, application) {
  application.inject('route', 'cookie', 'cookie:main');
  application.inject('controller', 'cookie', 'cookie:main');
}

export default {
  name: 'token-cookie',
  after: ['cookie'],
  initialize: initialize
};
