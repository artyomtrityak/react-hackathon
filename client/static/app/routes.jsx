define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var DefaultRoute = Router.DefaultRoute;
  var Route = Router.Route;

  // App components
  var AppView = require('./views/app.react');
    
  var routes = (
    <Route name="app" path="/" handler={AppView}>
      <Route name="inbox" handler={AppView}/>
      <Route name="calendar" handler={AppView}/>
      <DefaultRoute handler={AppView}/>
    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
});