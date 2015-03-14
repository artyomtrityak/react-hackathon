/*jslint node: true */
'use strict';

module.exports.getTimesheet = getTimesheet;
module.exports.getTimesheets = getTimesheets;
module.exports.createTimesheet = createTimesheet;

//By weeks
var TIMESHEETS = [
    {
        id: 1,
        name: 'Apply new login feature',
        price: 125,
        hours: 25,
        startWeekDate: new Date('03-13-2015')
    }, {
        id: 2,
        name: 'Code hard with React.js',
        price: 510,
        hours: 43,
        startWeekDate: new Date('03-06-2015')
    }
];

//One week details
var TIMESHEET_DETAILS = {
  name: 'Apply new login feature',
  details: [{
    day: 'Monday',
    hours: 10,
    price: 24,
    description: 'Did something'
  },
  {
    day: 'Wednesday',
    hours: 5,
    price: 45,
    description: 'Debugging'
  },
  {
    day: 'Friday',
    hours: 15,
    price: 101,
    description: 'Work hard'
  }
]};

function getTimesheet(req, res) {
    res.status(200).json(TIMESHEET_DETAILS);
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