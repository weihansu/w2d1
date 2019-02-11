const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  // console.log(https);
  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    // console.log(response);

    response.on('data', function (data) {
      console.log(data + '\n');

    });

  });


}

getAndPrintHTMLChunks();