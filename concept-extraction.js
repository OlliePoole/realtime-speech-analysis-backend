// MODULES ===============================================
var urlencoded = require('body-parser').urlencoded({extended: false})
var havenondemand = require('havenondemand')
var config = require('./config');

// CLIENT CONFIG =========================================
var client = new havenondemand.HODClient(config.hp_api_key, 'v1', '');


// FUNCTIONS =============================================

function conceptsForSentence(sentence, callback) {

  client.call('extractconcepts', {text: sentence}, function(error, response){
    console.log("CONCEPT EXTRACTION \n");
    console.log(response.body);
    console.log('\n \n');
    callback(response)
  })
}

module.exports = function(textToParse, callback) {
  conceptsForSentence(textToParse, function(response) {
    callback(response)
  })
}
