const call = require("./src/call");

// console.log(call.sync("Carlos Villalobos"));

// Referencia, sin ejecución
// call.withCallback("Dani Guitierrez", call.sync);

// call.withCallback llama a la siguiente función
// withCallback: function(nombre, cb) {
//     setTimeout(()=>{
//        console.log(cb(nombre))
//     }, 5000);
// },


// En segunda instacia tenemos a las promesas
// Espera un nombre y va retornarnos una promesa
// Promesas tienen (resolve, reject)

// console.log(call.withPromise("Promise Withcall"));

call.withPromise("Carlos Villalobos A.")
    .then(name=>{ console.log(name) });

// withPromise: function(nombre) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(nombre);
//         }, 5000); 
//     })
// }