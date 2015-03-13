/*jslint node: true */
'use strict';

module.exports.getTimesheet = getTimesheet;
module.exports.getTimesheets = getTimesheets;
module.exports.createTimesheet = createTimesheet;

var TIMESHEETS = [
    {
        id: 1,
        name: 'Work hard',
        date: new Date()
    }, {
        id: 2,
        name: 'Code hard',
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
    name: 'New timesheet'+Date.now(),
    date: new Date()
  };

  TIMESHEETS.push(newT);

  res.status(200).json(newT);
}