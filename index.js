const express = require("express");
const app = express();

// http://localhost:3000/app
app.get("/app", (req, res)=>{
    res.send("Estoy en la ruta /app");
});

// Definir ruta para home
// Handler/Manejador (request, response)
app.get("/", (req, res)=>{
    res.send("Estoy en la ruta HOME");
});

// Wildcard, ruta general. Ej. localhost:3000/asds
app.get("*", (req, res)=>{
    res.send("No se donde estoy");
});

// Listener del puerto y callback console.log
app.listen(3000, ()=>{
    console.log("Server is up!")
});