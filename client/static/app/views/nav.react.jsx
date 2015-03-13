define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var UserActions = require('../actions/user.actions');
  var UserStore = require('../stores/user.store');

  return React.createClass({
    render: function () {
      return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="app">Ciklum Timesheet Management</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="timesheets">Timesheets</Link>
                </li>
                <li>
                  <Link to="add-timesheet">Add Timesheet</Link>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });
});