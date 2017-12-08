const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: String,
    description: String,
    sku: String
}, {
    timestamps: true
});

module.exports = productSchema