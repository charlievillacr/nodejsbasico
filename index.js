const saludo = require("./src/greet");

// saludo.emit("clap");

// Función 'clap' dentro de greet.js
// myEmitter.on('clap', () => {
//     console.log('A clapping event was produced. ');
// });
// saludo.emit("shout", "Ya tengo hambre");

// Función 'shout' en greet.js
// myEmitter.on('shout', text => {
//     console.log(`Que hora es? ${text}!!!!`);
// });


saludo.emit("call", "Carlos Villalobos", (nombre) => {
    console.log("Estamos llamando a:", nombre);
})



// Ejemplo EventEmittet NodeJS Docs
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');
