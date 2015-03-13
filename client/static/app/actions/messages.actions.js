define(function(require) {
  var AppDispatcher = require('dispatcher/app.dispatcher'),

      Actions = {};

  Actions.markAsRead = function(id) {
    AppDispatcher.dispatch({
      actionType: 'READ_MESSAGE',
      id: id
    });
  };

  return Actions;
});
