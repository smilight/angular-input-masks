'use strict';

var StringMask = require('string-mask');
var maskFactory = require('../../helpers/mask-factory');

var ccSize = 23;

var ccMask = new StringMask('000-00000-00-0000-00000-0000');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^0-9]/g, '').slice(0, ccSize);
	},
	format: function(cleanValue) {
		var formatedValue;

		formatedValue = ccMask.apply(cleanValue) || '';

		return formatedValue.trim().replace(/[^A-Za-z0-9]$/, '');
	},
	validations: {
		account: function(value) {
			var valueLength = value && value.toString().length;
			return valueLength === ccSize;
		}
	}
});
