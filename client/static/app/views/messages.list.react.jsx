define(function(require) {
  var React = require('react');

  var MessagesStore = require('../stores/messages.store');
  var MessagesActions = require('../actions/messages.actions');

  function getStateFromStores() {
    return {
      messages: MessagesStore.getAll()
    };
  }

  return React.createClass({

    getInitialState: function() {
      return getStateFromStores();
    },

    componentDidMount: function() {
      this._scrollToBottom();

      MessagesStore.on("change", this._onChange);
    },

    componentWillUnmount: function() {
      MessagesStore.off("change", this._onChange);
    },

    _onChange: function() {
      this.setState(getStateFromStores());
    },

    componentDidUpdate: function() {
      this._scrollToBottom();
    },

    _scrollToBottom: function() {
      var ul = this.refs.messageList.getDOMNode();
      ul.scrollTop = ul.scrollHeight;
    },

    _onMessageClick: function(id) {
      return function() {
        MessagesActions.markAsRead(id);
      };
    },

    render: function() {
      var messageListItems = this.state.messages.map(function(message, index) {
        return (
          <li className="message"
            onClick={this._onMessageClick(message.id)}
            key={index}>
            {message.title}
          </li>
        );
      }, this);

      return (
        <div className="message-section">
          <ul className="message-list" ref="messageList">
            {messageListItems}
          </ul>
        </div>
      );
    }
  });
});
