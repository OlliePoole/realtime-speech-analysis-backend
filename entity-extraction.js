// MODULES ===============================================
var urlencoded = require('body-parser').urlencoded({extended: false})
var havenondemand = require('havenondemand')
var config = require('./config');

// CLIENT CONFIG =========================================
var client = new havenondemand.HODClient(config.hp_api_key, 'v1', '');
