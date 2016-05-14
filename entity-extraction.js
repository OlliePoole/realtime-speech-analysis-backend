var entityExtraction =  require('haven-entity-extraction');
var config = require('./config');

function entitiesForSentence(sentence, callback) {

  entityExtraction(sentence, config.hp_api_key, function(results){
      console.log(results); // Do some awesome stuff with results
      callback(results);
  });
}

module.exports = function(textToParse, callback) {
  entitiesForSentence(textToParse, function(response) {
    callback(response)
  })
};
