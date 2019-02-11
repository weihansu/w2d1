const request = require('request');
const fs = require('fs');
const url = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(url)               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
