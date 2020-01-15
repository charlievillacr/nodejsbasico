const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('clap', () => {
    console.log('A clapping event was produced. ');
});

myEmitter.on('greet', name => {
    console.log(`Please, greet ${name}!`);
});

myEmitter.on('shout', text => {
    console.log(`Que hora es? ${text}!!!!`);
});

myEmitter.on('call', (nombre, cb) => {
    cb(nombre);
});

module.exports = myEmitter;