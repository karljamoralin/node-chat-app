var moment = require('moment');

// Jan 1st 1970 00:00:00 am UTC

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(1, 'month');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
