// fs initialisieren
var fs = require("fs");

// App startet
console.log("App gestartet \n");

// Wolkenkratzer.json wird eingelesen
fs.readFile("./wolkenkratzer.json", function (err, data) { 
    
    // die Datei parsen 
    var jsonData = JSON.parse(data);
    
    // Schleife um alle Elemente des JSON Elements in der app.js zu speichern
    for (var i = 0; i < jsonData.wolkenkratzer.length; i++) {
        
        // Zuweisung der Elemente
        var counter = jsonData.wolkenkratzer[i];
    
        // Ausgabesequenz
        console.log("Name: " + counter.name);
        console.log("Stadt: " + counter.stadt);
        console.log("Höhe: " + counter.hoehe + "m");
        console.log("\n--------------------------------------\n"); 
    }
});