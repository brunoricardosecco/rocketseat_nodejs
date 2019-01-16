const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const mongoosePaginate = require('mongoose-paginate');

module.exports = {
  async index(req, res) {//função que retorna todos os registros do bd
    const {page = 1} = req.query;
    const products = await Product.paginate({/* seria possivel adicionar uma condição adicionando "{where}" */}, {page, limit: 10});

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});//o terceiro parametro indica que o objeto retornado sera o objeto ja atualizado, se não colocar o parametro, o objeto sera retornado com os valores antigos, porem no bd vai estar atualizado de qualquer forma, ele só muda a forma de retornar.

    return res.json(product);
  },

  async delete(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);

    return res.send();//como o objeto foi deletado não teria como retorna-lo, entaão o send(), retorna apenas ok se foi sucedido
  },

  async store(req, res) {//função que armazena registros no bd
    const product = await Product.create(req.body);

    return res.json(product);//retorna o produto criado
  }
};