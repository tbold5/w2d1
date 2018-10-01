var https = require('https');
// creating empty variable to assign data
var result = '';
function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    https.get(requestOptions, function(response){
        response.setEncoding('utf8');
        response.on('data', function (data) {
            result += data;    
            /* Add your code here */
        });
        response.on('end', function() {
            console.log(result);
        });
    });
};
getAndPrintHTML();