const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

//Criação de uma tabela com todos os atributos e suas restrições
const ProductSchema = new mongoose.Schema({
  //title é um atributo da tabela Product, suas restições estão abaixo, como tipo de dado e se é obrigatório ou não
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model("Product", ProductSchema);