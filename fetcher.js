const request = require('request');
const fs = require('fs');

const argv = process.argv.slice(2);

request(argv[0], (_, __, body) => {
  fs.writeFile(argv[1], body, (err) => {
    if (err) throw err;
  });
});

