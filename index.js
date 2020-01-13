const fs = require("fs");
const ops = require("./src/fileops");

let incValue;

// pasamos lectura del file, encoding y callbac
fs.readFile("./resources/number.txt", "utf8", (err, text)=>{
    if (err) throw err;
    console.log(text);
    const numbers = text.split("\n").map(n=>Number(n));
    console.log(numbers);
    // nos devuelve un array
    // [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '100' ]
    // Agregamos .map(n=>Number(n)) para que los considere como numeros
    // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
    incValue = ops.incrementValues(numbers);

    fs.writeFile("./resources/numbernew.txt", incValue.join("\n"), (err, result)=> {
        if(err) throw err;
});

});