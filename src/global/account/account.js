'use strict';

var StringMask = require('string-mask');
var maskFactory = require('../../helpers/mask-factory');

var ccSize = 23;

var ccMask = new StringMask('AAA-AAAAA-AA-AAAA-AAAAA-AAAA');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, ccSize);
	},
	format: function(cleanValue) {
		var formatedValue;

		formatedValue = ccMask.apply(cleanValue) || '';

		return formatedValue.trim().replace(/[^a-zA-Z0-9]$/, '').toUpperCase();
	},
	validations: {
		account: function(value) {
			var valueLength = value && value.toString().length;
			return valueLength === ccSize;
		}
	}
});
