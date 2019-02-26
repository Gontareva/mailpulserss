'use strict';

var request = require('request'),
	Steppy = require('twostep').Steppy;

exports.getPublications = function(params, callback) {
	Steppy(
		function() {
			request({
				url: 'http://culture.ru/api/publications',
				headers: {
					'accept-version': '1.0.0'
				},
				qs: params
			}, this.slot());
		},
		function(err, response) {
			this.pass(JSON.parse(response.body));
		},
		callback
	);
};
