/*jslint node: true */
'use strict';

var express = require('express'),
    router = express.Router(),
    controller = require('./timesheets.controller'),

    //Users
    UsersModule = require('../users');

console.log(UsersModule.api.ensureAuthenticated);

router.get('/:timesheetId', UsersModule.api.ensureAuthenticated, controller.getTimesheet);
router.get('/', UsersModule.api.ensureAuthenticated, controller.getTimesheets);
router.post('/', UsersModule.api.ensureAuthenticated, controller.createTimesheet);

module.exports.routes = router;