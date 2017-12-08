const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./product')

var orderSchema = new Schema({
    products: {
        type: Schema.Types.objectId,
        ref: 'Product'
    }
})

module.exports = mongoose.model('Order', orderSchema)