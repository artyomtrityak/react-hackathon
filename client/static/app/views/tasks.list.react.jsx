define(function(require) {
  var React = require('react/addons'),
      cx = React.addons.classSet;

  var TasksStore = require('../stores/tasks.store');
  var TasksActions = require('../actions/tasks.actions');

  function getStateFromStores() {
    return {
      tasks: TasksStore.getAll()
    };
  }

  return React.createClass({

    getInitialState: function() {
      return getStateFromStores();
    },

    componentDidMount: function() {
      this._scrollToBottom();

      TasksStore.on("change", this._onChange);
    },

    componentWillUnmount: function() {
      TasksStore.off("change", this._onChange);
    },

    _onChange: function() {
      this.setState(getStateFromStores());
    },

    componentDidUpdate: function() {
      this._scrollToBottom();
    },

    _scrollToBottom: function() {
      var ul = this.refs.taskList.getDOMNode();
      ul.scrollTop = ul.scrollHeight;
    },

    _onTaskClick: function(id) {
      return function() {
        TasksActions.markAsRead(id);
      };
    },

    render: function() {
      var taskListItems = this.state.tasks.map(function(task, index) {
        var classNames  = cx({
          "task": true,
          "complete": task.isComplete
        });

        return (
          <li className={classNames}
            onClick={this._onTaskClick(task.id)}
            key={index}>
            {task.title}
          </li>
        );
      }, this);

      return (
        <div className="task-section">
          <ul className="task-list" ref="taskList">
            {taskListItems}
          </ul>
        </div>
      );
    }
  });
});
