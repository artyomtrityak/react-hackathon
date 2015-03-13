requirejs.config({
  baseUrl: 'app',
  urlArgs: 'bust=' + Date.now(),
  paths: {
    'react': '../bower_components/react/react-with-addons',
    'jquery': '../bower_components/jquery/dist/jquery',
    'moment': '../bower_components/moment/moment',
    'twitter-bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
    'spin': '../bower_components/spin.js/spin',
    'lodash': '../bower_components/lodash/dist/lodash'
  },

  shim: {
    'twitter-bootstrap': ['jquery'],
    'app-bootstrap': []
  },

  packages: [
  ],

  deps: ['app-bootstrap']
});