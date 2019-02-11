const https = require('https');

function getAndPrintHTML () {
  let result = [];

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
    result.push(data);
    });

    response.on('end', function() {
    console.log(result);
    console.log('Response stream complete.');
    });
  });
}

getAndPrintHTML();