const mongoose = require('mongoose');
const Product = require('./product')
const Schema = mongoose.Schema;


var orderSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('Order', orderSchema)