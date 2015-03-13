requirejs.config({
  baseUrl: 'app',
  urlArgs: 'bust=' + Date.now(),
  paths: {
    'flux': '../bower_components/flux/dist/Flux',
    'backbone': '../bower_components/backbone/backbone',
    'react': '../bower_components/react/react-with-addons',
    'react-router': '../bower_components/react-router/build/global/ReactRouter',
    'jquery': '../bower_components/jquery/dist/jquery',
    'twitter-bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
    'spin': '../bower_components/spin.js/spin',
    'underscore': '../bower_components/underscore/underscore'
  },

  shim: {
    'twitter-bootstrap': ['jquery'],
    'backbone': ['jquery', 'underscore'],
    'app-bootstrap': []
  },

  deps: ['routes']
});