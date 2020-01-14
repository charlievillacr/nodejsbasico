const fs = require("fs");
const ops = require("./src/fileops");


// pasamos lectura del file, encoding y callbac
fs.readFile("./resources/name.txt", "utf8", (err, text)=>{
    if (err) throw err;
    console.log(text);
    const names = text.split("\n").map(n=> n.trim());
    // The trim() method removes whitespace from both ends of a string.
    const greetingList = ops.callNames(names);
    // nos devuelve un array
    // [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '100' ]
    // Agregamos .map(n=>Number(n)) para que los considere como numeros
    // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

    fs.writeFile(
        "./resources/namesnew.txt", 
        greetingList.join("\n"), 
        (err, result)=> {
        if(err) throw err;
        }
    );

});