'use strict';

var Steppy = require('twostep').Steppy,
	generateRSSLogic = require('./logic/generateRSS');

Steppy(
	function() {
		generateRSSLogic.makeAndWriteRSS(this.slot());
	},
	function(err) {
		if (err) {
			console.log(err);
			console.log(err.stack);
			process.exit(1);
		}
	}
);
