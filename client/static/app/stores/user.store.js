define(function(require) {
  var Backbone = require('backbone'),
      AppDispatcher = require('dispatcher/app.dispatcher');

  //Create singleton
  var userStore = new (Backbone.Model.extend({
      defaults: {
        isLoggedIn: false
      },

      logout: function() {
        this.clear();
      }
  }))();

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    switch(action.actionType) {

      case 'LOGOUT':
        userStore.logout();
        console.log('logout done');
        break;

      default:
        // no op
    }

  });

  return userStore;
});