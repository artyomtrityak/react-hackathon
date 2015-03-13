define(function(require) {
  var Backbone = require('backbone');

  Logout = Backbone.Model.extend({url: '/api/users/logout'});

  return {
    logout: logoutFn
  };

  function logoutFn() {
    var userLogout = new Logout();
    return userLogout.save();
  }
});