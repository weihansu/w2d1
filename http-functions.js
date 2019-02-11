const https = require('https');

module.exports = {
  getHTML: getHTML,
  printHTML: printHTML
};

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