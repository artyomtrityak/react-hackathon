define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var UserActions = require('../actions/user-actions');
  var UserStore = require('../stores/user.store');

  return React.createClass({
    onClick: function() {
      console.log('click!!!');
      UserActions.logout();
    },

    render: function () {
      return (
        <div>
          <header>
            <ul>
              <li><Link to="app">Dashboard</Link></li>
              <li><Link to="inbox">Inbox</Link></li>
              <li><Link to="calendar">Calendar</Link></li>
            </ul>
            <div onClick={this.onClick}>
              Logged in as Jane
            </div>
          </header>

          {/* this is the important part */}
          <RouteHandler/>
        </div>
      );
    }
  });
});