define(function(require) {
  var Backbone = require('backbone'),
      AppDispatcher = require('dispatcher/app.dispatcher'),
      _ = require("underscore");

  //Create singleton
  var tasksStore = new (Backbone.Model.extend({
    initialize: function() {
      this.set({ tasks: [
        { id: 1, title: "First task", isComplete: false },
        { id: 2, title: "Second task", isComplete: false },
        { id: 3, title: "Third task", isComplete: false },
        { id: 4, title: "Fourth task", isComplete: false },
        { id: 5, title: "Fifth task", isComplete: false }
      ]});
    },

    getAll: function() {
      return this.get("tasks");
    }
  }))();

  // Register callback to handle all updates
  tasksStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {

      case "COMPLETE_TASK":
        var tasks = tasksStore.get("tasks");
        var task = _.findWhere(tasks, {id: action.id});
        if (task) {
          task.isComplete = true;
          tasksStore.set({tasks: tasks});
        }
        break;

      default:
        // no op
    }

  });

  return tasksStore;
});
