define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var UserActions = require('../actions/user.actions');
  var UserStore = require('../stores/user.store');

  var NavView = require('./nav.react');

  return React.createClass({
    onClick: function() {
      UserActions.logout();
    },

    render: function () {
      return (
        <div>
          <NavView />
          <div className="container">

            <div className="jumbotron">
              <h2>Timesheet management</h2>
              <p>
                <input
                  onClick={this.onClick}
                  type="button"
                  className="btn btn-lg btn-primary"
                  value="Create timesheet">
                </input>
              </p>
            </div>

            {/* this is the important part */}
            <RouteHandler/>

          </div>
        </div>
      );
    }
  });
});