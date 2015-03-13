define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var MessagesList = require('./messages.list.react');
  var UnreadMessagesStore = require('../stores/unreadmessages.store');

  function getStateFromStores() {
    return {
      unreadMessagesCount: UnreadMessagesStore.getCount()
    };
  }

  return React.createClass({

    getInitialState: function() {
      return getStateFromStores();
    },

    componentDidMount: function() {
      this._scrollToBottom();

      UnreadMessagesStore.on("change", this._onChange);
    },

    componentWillUnmount: function() {
      UnreadMessagesStore.off("change", this._onChange);
    },

    _onChange: function() {
      this.setState(getStateFromStores());
    },

    render: function () {
      return (
        <div>
          <h3>Unread messages: {this.state.unreadMessagesCount}</h3>
          <MessagesList/>
        </div>
      );
    }
  });
});
