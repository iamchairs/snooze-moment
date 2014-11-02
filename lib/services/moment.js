var snooze = require('snooze');
var moment = require('moment');

snooze.module('snooze-moment').service('moment', function() {
	return moment;
});