var request = require('request');

var url = "http://coincap.io/front";

request(url, function(err, response, body){
    if (err) {
        console.error('ZOMG: ', err);
        return false;
    }

    var allCoinData = JSON.parse(body)
    .slice(0, 5)
    .forEach(outputCoin);
    
})