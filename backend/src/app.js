//Importación de librerias
const express = require("express");
const mongoose = require("mongoose");
const products = require('./data/product.json')

//Ejecucion del servidor
const app = express();
app.use(express.json());
const serverPort = 8081;
app.listen(
  process.env.PORT || serverPort,
  console.log(`Server running on port ${serverPort}`)
);

//Prueba conexión
app.get("/", (req, res) => {
  res.send("APIRest runing!");
});

//Mostar productos desde un json
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => {
        return p._id === req.params.id;
    })
    res.json(product);
  });

