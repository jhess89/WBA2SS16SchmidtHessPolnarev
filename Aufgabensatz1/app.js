var fs = require("fs");

console.log("App gestartet \n");

fs.readFile("./wolkenkratzer.json", function (err, data) { 
    
    var arr = JSON.parse(data);
    
    console.log("Name: " + arr.name);
    console.log("Stadt: " + arr.stadt);
    console.log("Höhe: " + arr.hoehe + "m");
    console.log("--------------------\n");
    
});



