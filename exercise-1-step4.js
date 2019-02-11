const https = require('https');

function getHTML (options, callback) {
  /* Add your code here */
  let result = [];

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', callback);

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);