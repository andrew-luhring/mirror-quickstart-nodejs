"use strict";


var client = require('./client.json').web;




module.exports = {
	port: 5000
	,	sessionSecret: ''
	,    googleApis: {
			clientId: client.client_id
		,   clientSecret: client.client_secret
		,   redirectUris: client.redirect_uris
	}
};

