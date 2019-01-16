const express = require("express");//express é um mini framework do nodejs
const mongoose = require("mongoose");//mongoose é um ROM, ROM é uma estrutura de dados que faz a intermediação entre tipos de dados, por exemplo passando de um formato json para um relacional..
const requireDir = require("require-dir");//uma dependencia que facilita o dev, ele simplifica a importação dos models, ao invez de fazer um import para cada model, apenas é importado a pasta inteira e ele ja inclui todos os arquivos
const cors = require("cors");

//iniciando o app
const app = express();
app.use(express.json()); //informa a aplicação que o dev poderá enviar dados em formato json
app.use(cors());//cors é um modulo que permite que a api seja visualizada por qualquer dominio(no caso de cors(), sem parametro), e existem opções de parametros a serem passados no cors para se fazer restrições.

//iniciando o db
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});//permite a conexão do mongoose com o mongodb armazenado na porta 27017

requireDir("./src/models");

//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);