define(function(require) {
  var Router = require('react-router');

  var React = require('react');

  var DefaultRoute = Router.DefaultRoute;
  var Link = Router.Link;
  var Route = Router.Route;
  var RouteHandler = Router.RouteHandler;

  var App = React.createClass({
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

  var routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="inbox" handler={Inbox}/>
      <Route name="calendar" handler={Calendar}/>
      <DefaultRoute handler={Dashboard}/>
    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
});