const functions = require('./http-functions');

const getHTML = functions.getHTML;
const printHTML = functions.printHTML;

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);
