// fs initialisieren
var fs = require("fs");
var chalk = require("chalk");

// App startet
console.log("App gestartet \n");

// Wolkenkratzer.json wird eingelesen
fs.readFile("./wolkenkratzer.json", function (err, data) { 
    
    // die Datei parsen 
    var jsonData = JSON.parse(data);
    
    jsonData.wolkenkratzer.sort(function(a,b){
        if(a.hoehe > b.hoehe){
            return -1;
        }
        if(a.hoehe < b.hoehe){
            return 1;
        }
        return 0;
    });
    // Schleife um alle Elemente des JSON Elements in der app.js zu speichern
    for (var i = 0; i < jsonData.wolkenkratzer.length; i++) {
        
        
        // Zuweisung der Elemente
        var counter = jsonData.wolkenkratzer[i];
    
        // Ausgabesequenz
        console.log("Name: " + chalk.green(counter.name));
        console.log("Stadt: " + chalk.yellow(counter.stadt));
        console.log("Höhe: " + chalk.red(counter.hoehe + "m"));
        console.log("\n--------------------------------------\n"); 
    }    
});