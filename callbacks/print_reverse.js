const functions = require('../http-functions');

const getHTML = functions.getHTML;
const printHTML = functions.printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverseCase (html) {

  let toReverse =  html.split('').reverse().join('');
  console.log(toReverse);

}

getHTML(requestOptions, printReverseCase);