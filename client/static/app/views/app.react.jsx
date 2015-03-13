define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;


  //TODO: 
  var AppDispatcher = require('dispatcher/app-dispatcher');
  var UserStore = require('../stores/user.store');
  
  AppDispatcher.dispatch({
      actionType: 'LOGOUT',
      text: 'Hello'
    });

  return React.createClass({
    render: function () {
      return (
        <div>
          <header>
            <ul>
              <li><Link to="app">Dashboard</Link></li>
              <li><Link to="inbox">Inbox</Link></li>
              <li><Link to="calendar">Calendar</Link></li>
            </ul>
            Logged in as Jane
          </header>

          {/* this is the important part */}
          <RouteHandler/>
        </div>
      );
    }
  });
});