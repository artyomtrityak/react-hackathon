define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var TasksList = require('./tasks.list.react');
  var CompleteTasksStore = require('../stores/completetasks.store');

  function getStateFromStores() {
    return {
      completeTasksCount: CompleteTasksStore.getCount()
    };
  }

  return React.createClass({

    getInitialState: function() {
      return getStateFromStores();
    },

    componentDidMount: function() {
      CompleteTasksStore.on("change", this._onChange);
    },

    componentWillUnmount: function() {
      CompleteTasksStore.off("change", this._onChange);
    },

    _onChange: function() {
      this.setState(getStateFromStores());
    },

    render: function () {
      return (
        <div>
          <h3>Complete tasks: {this.state.completeTasksCount}</h3>
          <TasksList/>
        </div>
      );
    }
  });
});
