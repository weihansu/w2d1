const https = require('https');

function getAndPrintHTML (options) {
  let result = [];

  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      result.push(data);
    });

    response.on('end', function () {
      console.log('Your resquest is finish!');
      console.log(result);
    });
  });

  return result;
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);