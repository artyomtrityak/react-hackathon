define(function(require) {
  var React = require('react');
  var Router = require('react-router');
  var DefaultRoute = Router.DefaultRoute;
  var Route = Router.Route;

  // App components
  var AppView = require('./views/app.react'),
      TasksView = require('./views/tasks.react'),
      NoopView = require('./views/noop.react');

  var routes = (
    <Route name="app" path="/" handler={AppView}>

      <Route name="tasks" handler={TasksView}/>

      <Route name="timesheets" handler={NoopView}/>
      <Route name="timesheet" handler={NoopView}/>
      <Route name="add-timesheet" handler={NoopView}/>
      <Route name="login" handler={NoopView}/>

      <DefaultRoute handler={NoopView}/>

    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('react-root'));
  });
});
