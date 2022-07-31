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
  {
    nombre: "Camila",
    telefono: "09007523",
    id: 3,
  },
];

app.get("/contactos", (request, response, next) => {
  response.json(listName);
});

app.post("/contactos", (request, response, next) => {
  const id = listName.length + 1;
  const { nombre, telefono } =request.body;
  const newContacto= { ...request.body, id};
  if(nombre && telefono && id){
    listName.push(newContacto);
    response.json(listName);
  } else {
    response.status(500).json({error:'There was an error'})
  }
});

app.put("/contactos/:id",(request, response, next) => {
  const { id } = request.params;
  const { nombre, telefono } =request.body;
  if(nombre && telefono && id) {
    _.each(listName, (listName, i) => {
      if(listName.id === id) {
        listName.nombere= nombre;
        listName.telefono= telefono;
      }
    });
    response.json(listName);
  } else {
    response.status(500).json({error:'There was an error'})
  }
});

app.delete('/contactos/:id', (request, response, next)=> {
  const { id } = request.params;
  if(id) {
    _.each(listName, (listName, i) => {
      if(listName.id === id) {
        listName.splice(i, 1);
      }
    });
    response.json(listName);
  }
})
app.listen(4000, () => console.log("Servidor corriendo en el puerto 4000"));
console.log("Yendo a buscar los datos");
