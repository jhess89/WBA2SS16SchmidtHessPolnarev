var fs = require("fs");

console.log("App gestartet \n");

fs.readFile("./wolkenkratzer.json", function (err, data) { 
    
    var jsonData = JSON.parse(data);
    
    for (var i = 0; i < jsonData.wolkenkratzer.length; i++) {
    var counter = jsonData.wolkenkratzer[i];
    console.log("Name: " + counter.name);
    console.log("Stadt: " + counter.stadt);
    console.log("Höhe: " + counter.hoehe + "m");
    console.log("\n--------------------------------------\n"); 
}});