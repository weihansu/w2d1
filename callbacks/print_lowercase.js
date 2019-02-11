const functions = require('../http-functions');

const getHTML = functions.getHTML;
const printHTML = functions.printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  console.log(html.toLowerCase());

}

getHTML(requestOptions, printLowerCase);