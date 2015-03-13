/*jslint node: true */
'use strict';

module.exports.getTimesheet = getTimesheet;
module.exports.getTimesheets = getTimesheets;
module.exports.createTimesheet = createTimesheet;

var TIMESHEETS = [
    {
        id: 1,
        name: 'Work hard',
        price: 125,
        date: new Date()
    }, {
        id: 2,
        name: 'Code hard',
        price: 510,
        date: new Date()
    }
];

function getTimesheet(req, res) {
    res.status(200).json(TIMESHEETS[req.params.timesheetId]);
}

function getTimesheets(req, res) {
    res.status(200).json(TIMESHEETS); 
}

function createTimesheet(req, res) {
  var newT = {
    timesheetId: Date.now(),
    name: req.body.name,
    price: req.body.price,
    date: req.body.date
  };

  TIMESHEETS.push(newT);

  res.status(200).json(newT);
}