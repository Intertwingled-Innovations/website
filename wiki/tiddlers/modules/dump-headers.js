/*\
title: $:/core/modules/server/authenticators/dumpheaders.js
type: application/javascript
module-type: authenticator

Authenticator to dump headers

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

if($tw.node) {
	var util = require("util"),
		fs = require("fs"),
		url = require("url"),
		path = require("path");
}

function DumpHeaders(server) {
	this.server = server;
}

/*
Returns true if the authenticator is active, false if it is inactive, or a string if there is an error
*/
DumpHeaders.prototype.init = function() {
	return true;
};

/*
Returns true if the request is authenticated and assigns the "authenticatedUsername" state variable.
Returns false if the request couldn't be authenticated having sent an appropriate response to the browser
*/
DumpHeaders.prototype.authenticateRequest = function(request,response,state) {
	var headers = [];
	for(const header of Object.keys(request.headers).sort()) {
		headers.push(`${header} = ${request.headers[header]}`);
	}
	console.log(headers);
	return true;
};

exports.AuthenticatorClass = DumpHeaders;

})();
