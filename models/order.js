const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./product.js')

var orderSchema = new Schema({
    products: [product],
})

module.exports = mongoose.model('Order', orderSchema)