const functions = require('../http-functions');

const getHTML = functions.getHTML;
const printHTML = functions.printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function print1337Case (html) {


}

getHTML(requestOptions, print1337Case);