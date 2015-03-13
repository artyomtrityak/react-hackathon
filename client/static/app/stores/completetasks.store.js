define(function(require) {
  var Backbone = require('backbone'),
      AppDispatcher = require('dispatcher/app.dispatcher'),
      _ = require("underscore"),

      TasksStore = require('./tasks.store');

  var getCompleteCount = function() {
    return _.reduce(TasksStore.getAll(), function(count, task) {
      return count + (task.isComplete ? 0 : 1);
    }, 0);
  };

  //Create singleton
  var completeTasksStore = new (Backbone.Model.extend({
    initialize: function() {
      this.set({
        count: getCompleteCount()
      });
    },

    getCount: function() {
      return this.get("count");
    }
  }))();

  // Register callback to handle all updates
  completeTasksStore.dispatchToken = AppDispatcher.register(function(action) {
    AppDispatcher.waitFor([
      TasksStore.dispatchToken
    ]);

    switch(action.actionType) {
      case "COMPLETE_TASK":
        completeTasksStore.set({ count: getCompleteCount() });
        break;

      default:
        // no op
    }

  });

  return completeTasksStore;
});
