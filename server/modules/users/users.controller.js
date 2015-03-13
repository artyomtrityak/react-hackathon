/*jslint node: true */
'use strict';

module.exports.login = login;
module.exports.logout = logout;
module.exports.ensureAuthenticated = ensureAuthenticated;

function login(req, res) {
  req.session.user = req.body.username;
  res.status(200).json({user: req.body.username});
}

function logout(req, res) {
  req.session.user = undefined;
  res.status(200).json({status: true});
}

function ensureAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({error: 'Requires authenticated'});
  } 
}

