define(function(require) {
  var Backbone = require('backbone');

  var Logout = Backbone.Model.extend({url: '/api/users/logout'});
  var Login = Backbone.Model.extend({url: '/api/users/login'});

  return {
    logout: logoutFn
  };

  function logoutFn() {
    var userLogout = new Logout();
    return userLogout.save();
  }
});