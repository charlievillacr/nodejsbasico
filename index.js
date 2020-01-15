/* Servir una página web con un protocolo http */

// Modulo HTTP de Node.JS
const http = require("http");

// File System
const fs = require("fs");


// Crear instancia para el servidor con una constante
                            // Request, Response
const server = http.createServer((req, res)=>{
                             // Handler con Arrow function =>{}
// Pasar handler que debe procesar peticiones de entrada con request
// peticiones de salida con response
// Lectura de archivo y luego se devuelva al lugar que hace la petició
    // fs para leer nuestro archivo (ruta, callback)
    fs.readFile("./resources/my_page.html", (err, data)=>{
        if (err) { console.error(err); return; }
        res.end(data);
    });

});
console.log("Iniciando servidor...")
// Escuchar en el puerto 3000.
server.listen(3000);
// Ejecutamos en terminal con `node .`
