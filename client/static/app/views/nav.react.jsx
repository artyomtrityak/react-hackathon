define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var Link = Router.Link;
  var State = Router.State;
  var RouteHandler = Router.RouteHandler;

  var UserActions = require('../actions/user.actions');
  var UserStore = require('../stores/user.store');

  var cx = React.addons.classSet;

  return React.createClass({
    mixins: [State],

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
      var timesheetsStyle = cx({
            'active': this.isActive('timesheets')
          }),
          addTimeStyle = cx({
            'active': this.isActive('add-timesheet')
          });

      return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="app">Ciklum Timesheet Management</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className={timesheetsStyle}>
                  <Link to="timesheets">Timesheets</Link>
                </li>
                <li className={addTimeStyle}>
                  <Link to="add-timesheet">Add Timesheet</Link>
                </li>
              </ul>

              {/* This block can be moved to separated react view */}
              {this.renderLoginBlock()}
              
            </div>
          </div>
        </nav>
      );
    },

    renderLoginBlock: function() {
      var logBlock,
          loginStyle = cx({
            'active': this.isActive('login')
          });
      if (this.state.isLoggedIn) {
        logBlock = <a href="#" onClick={this.onLogout}>Logout</a>;
      } else {
        logBlock = <Link to="login">Login</Link>;
      }

      return (
        <ul className="nav navbar-nav navbar-right">
          <li className={loginStyle}>
            {logBlock}
          </li>
        </ul>
      );
    },
  });
});