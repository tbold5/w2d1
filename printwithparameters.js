var https = require('https');
// creating empty variable to assign data
var result = '';
function getAndPrintHTML (options) {
    // made new parameter 'options' that will access
    // any requested objects outside the scope
    https.get(options, function(response){
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
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
        // put requestOptions outside the function due to scroping
};
getAndPrintHTML(requestOptions);