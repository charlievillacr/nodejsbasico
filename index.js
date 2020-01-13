const call = require("./src/call");

// console.log(call.sync("Carlos Villalobos"));

// Referencia, sin ejecución
call.withCallback("Dani Guitierrez", call.sync);


// withCallback: function(nombre, cb) {
//     setTimeout(()=>{
//        console.log(cb(nombre))
//     }, 5000);
// },