require('../config/db');
const sampleData = require('./sampledata')
const Order = require('../models/order')
const Product = require('../models/product')

let productSeeds = Product.remove({}).then(() => {
    return Product.create(sampleData);
});

let orderSeeds = Order.remove({}).then(() => {
    return Order.create({products: []})
});

Promise.all([productSeeds, orderSeeds]).then(() => {
    require('mongoose').connection.close();
    process.exit();
});