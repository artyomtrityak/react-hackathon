/*jslint node: true */
'use strict';

var express = require('express'),
    router = express.Router(),
    controller = require('./users.controller');

router.post('/login', controller.login);

module.exports.routes = router;
module.exports.api = {
  ensureAuthenticated: controller.ensureAuthenticated
};