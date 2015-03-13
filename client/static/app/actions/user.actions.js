define(function(require) {
  var AppDispatcher = require('dispatcher/app.dispatcher'),

      UserUtils = require('webutils/user.utils'),
      Actions = {};

  Actions.logout = function() {
    UserUtils.logout().then(function() {

      AppDispatcher.dispatch({
        actionType: 'LOGOUT'
      });

    });
  };

  return Actions;
});