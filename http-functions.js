var https = require('https');
// creating empty variable to assign data

module.exports = function getHTML (options, callbacks) {

    var result = '';

    https.get(options, function(response){
        response.setEncoding('utf8');
        response.on('data', function (data) {
            result += data;     
            /* Add your code here */
        });
        response.on('end', function() {
            callbacks(result);
        });
    });
    
};
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
        // put requestOptions outside the function due to scroping
};
    function printHTML (html) {
        console.log(html);
    };
