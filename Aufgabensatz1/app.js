var fs = require("fs");

console.log("Starting");

fs.readFile("./wolkenkratzer.json", function(error, data) {
   console.log(data.toString());
});


