define(function(require) {
  var AppDispatcher = require('dispatcher/app.dispatcher'),

      Actions = {};

  Actions.markAsComplete = function(id) {
    AppDispatcher.dispatch({
      actionType: 'COMPLETE_TASK',
      id: id
    });
  };

  return Actions;
});
