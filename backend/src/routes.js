const express = require("express");
const routes = express.Router();
const ProductController = require("./Controllers/ProductController");

//rotas ou metodos CRUD 
routes.get("/products", ProductController.index);//metodo get retorna algo
routes.get("/products/:id", ProductController.show);//metodo get porem retorna com base no id
routes.put("/products/:id", ProductController.update);//metodo post porem encontra um objeto pelo id e atualiza o mesmos
routes.post("/products", ProductController.store);//metodo post introduz algo
routes.delete("/products/:id", ProductController.delete);//metodo delete como o nome diz exclui o elemento pelo id

module.exports = routes;