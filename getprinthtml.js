var https = require('https');
// creating empty variable to assign data
var emptyVar;
function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    https.get(requestOptions, function(response){
        response.setEncoding('utf8');
        response.on('data', function (data) {
            emptyVar += data;
            console.log(emptyVar)
            /* Add your code here */
        });
    });
};
getAndPrintHTML();