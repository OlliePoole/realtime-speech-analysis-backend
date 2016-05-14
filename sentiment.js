// MODULES ===============================================
var urlencoded = require('body-parser').urlencoded({extended: false})
var havenondemand = require('havenondemand')
var config = require('./config');

// CLIENT CONFIG =========================================
var client = new havenondemand.HODClient(config.hp_api_key, 'v1', '');


// METHOD REQUESTS =======================================


/*
Example response
{
    "positive": [
        {
            "sentiment": "amazing",
            "topic": "That pitch",
            "score": 0.8510865864332573,
            "original_text": "That pitch was amazing",
            "original_length": 22,
            "normalized_text": "That pitch was amazing",
            "normalized_length": 22
        }
    ],
    "negative": [
      {
          "sentiment": "don't like",
          "topic": "Alicia",
          "score": -0.7510865864332573,
          "original_text": "I don't like Alicia",
          "original_length": 22,
          "normalized_text": "I don't like Alicia",
          "normalized_length": 22
      }
  ],
    "aggregate": {
        "sentiment": "positive",
        "score": 0.8510865864332573
    }
}
*/

function sentimentForSentence(sentence, callback) {

  client.call('analyzesentiment', {text: sentence}, function(err1, resp1){
    console.log("---------------------------------------------\n")

    // POSITIVE
    var positiveSentiment = resp1.body.positive
    if (positiveSentiment.length > 0) {
      console.log("POSITIVE SENTIMENT");
      console.log("---------------------------------------------")

      positiveSentiment.forEach(function(response) {
        var sentiment = response.sentiment
        var topic = response.topic
        var score = response.score

        console.log("Sentiment: " + sentiment)
        console.log("Topic: " + topic)
        console.log("Score: " + score + '\n')
      })

    }

    // NEGATIVE
    var negativeSentiment = resp1.body.negative

    if (negativeSentiment.length > 0) {
      console.log("NEGATIVE SENTIMENT");
      console.log("---------------------------------------------")

      negativeSentiment.forEach(function(response) {
        var sentiment = response.sentiment
        var topic = response.topic
        var score = response.score

        console.log("Sentiment: " + sentiment)
        console.log("Topic: " + topic)
        console.log("Score: " + score + '\n')
      })

    }

    // OVERALL
    console.log("OVERALL SENTIMENT");
    console.log("---------------------------------------------\n")

    var sentiment = resp1.body.aggregate.sentiment
    var score = resp1.body.aggregate.score

    console.log("Overall Sentiment: " + sentiment);
    console.log("Overall Score: " + score + '\n');

    // return using the callback
    callback(resp1)
  })
}

exports.sentimentForSentence = sentimentForSentence
