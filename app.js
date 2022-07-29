const express = require("express");

const app = express();

app.use(express.json())

const listName = [
  {
    nombere: "Samara",
    telefono: "092345678",
    id: 1,
  },
  {
    nombre: "Salvador",
    telefono: "12345678",
    id: 2,
  },
];

app.get("/contactos", (request, response, next) => {
  response.json(listName);
});

app.post("/contactos", () => {
  
});

app.listen(4000, () => console.log("Servidor corriendo en el puerto 4000"));
console.log("Yendo a buscar los datos");
