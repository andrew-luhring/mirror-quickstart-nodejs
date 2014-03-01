"use strict";


var client = require('./client.json').web;




module.exports = {
	port: 5000
	,	sessionSecret: 'q-CIYc_TNar1ueRNMKraZNZE'
	,    googleApis: {
			clientId: client.client_id
		,   clientSecret: client.client_secret
		,   redirectUris: client.redirect_uris
	}
};

