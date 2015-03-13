define(function(require) {
  var Backbone = require('backbone'),
      AppDispatcher = require('dispatcher/app.dispatcher'),
      _ = require("underscore"),

      MessagesStore = require('./messages.store');

  var getUnreadCount  = function() {
    return _.reduce(MessagesStore.getAll(), function(count, message) {
      return count + (message.isRead ? 0 : 1);
    }, 0);
  };

  //Create singleton
  var unreadMessagesStore = new (Backbone.Model.extend({
    constructor: function() {
      this.set({
        count: getUnreadCount()
      });
    },

    getCount: function() {
      return this.get("count");
    }
  }))();

  // Register callback to handle all updates
  unreadMessagesStore.dispatchToken = AppDispatcher.register(function(action) {
    AppDispatcher.waitFor([
      MessagesStore.dispatchToken
    ]);

    switch(action.actionType) {
      case "READ_MESSAGE":
        unreadMessagesStore.set({ count: getUnreadCount() });
        break;

      default:
        // no op
    }

  });

  return unreadMessagesStore;
});
