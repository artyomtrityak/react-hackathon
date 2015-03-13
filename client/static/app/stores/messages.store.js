define(function(require) {
  var Backbone = require('backbone'),
      AppDispatcher = require('dispatcher/app.dispatcher'),
      _ = require("underscore");

  //Create singleton
  var messagesStore = new (Backbone.Model.extend({
    initialize: function() {
      this.set({ messages: [
        { id: 1, title: "First message", isRead: false },
        { id: 2, title: "Second message", isRead: false },
        { id: 3, title: "Third message", isRead: false },
        { id: 4, title: "Fourth message", isRead: false },
        { id: 5, title: "Fifth message", isRead: false }
      ]});
    },

    getAll: function() {
      return this.get("messages");
    }
  }))();

  // Register callback to handle all updates
  messagesStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {

      case "READ_MESSAGE":
        var messages = messagesStore.get("messages");
        var message = _.findWhere(messages, {id: action.id});
        if (message) {
          message.isRead = true;
          messagesStore.set({messages: messages});
        }
        break;

      default:
        // no op
    }

  });

  return messagesStore;
});
