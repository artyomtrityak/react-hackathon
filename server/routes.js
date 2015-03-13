/*jslint node: true */
'use strict';

var UsersModule = require('./modules/users'),
    TimesheetsModule = require('./modules/timesheets');

module.exports = RegisterRoutes;

function RegisterRoutes(app) {
  console.log('Registering modules...');

  app.use('/api/timesheets', TimesheetsModule.routes);
  app.use('/api/users', UsersModule.routes);

  console.log('Done!');
}
