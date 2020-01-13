const call = require("./src/call");
// Importamos funciones

// Hacemos uso de call.greet
// call.greet("Carlos Villalobos");

// call.withPromise("Carlos", "Villalobos")
//     .then(n=>console.log(n));

// Asynch / await

async function callWithPromise() {
 const fullName =  await call.withPromise("Carlos", "Async/Await")
        console.log(fullName);
}

callWithPromise();