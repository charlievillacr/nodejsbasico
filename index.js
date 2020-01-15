const errors = require("./src/errors");
// const handle = require("./src/handling");

// handle.errorFirstCallbackWrong();

try {
    errors.standardErr.range();
} catch(err) {
    console.log("Ha ocurrido un error: ", err);
}

console.log("Hola");