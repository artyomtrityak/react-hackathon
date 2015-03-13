define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var UserActions = require('../actions/user.actions');
  var UserStore = require('../stores/user.store');

  return React.createClass({
    componentWillMount: function() {
      UserStore.on('change', this.handleChange);
    },

    componentDidMount: function () {
      this.handleChange();  
    },

    componentWillUnmount: function() {
      UserStore.off('change', this.handleChange);
    },

    handleChange: function() {
      this.setState(UserStore.toJSON());
    },

    getInitialState: function () {
        return {
        };
    },

    onLogout: function() {

    },

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

              {this.renderLoginBlock()}
              
            </div>
          </div>
        </nav>
      );
    },

    renderLoginBlock: function() {
      var logBlock;
      if (this.state.isLoggedIn) {
        logBlock = <a href="#" onClick={this.onLogout}>Logout</a>;
      } else {
        logBlock = <Link to="login">Login</Link>;
      }

      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            {logBlock}
          </li>
        </ul>
      );
    },
  });
});