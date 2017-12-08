const Order = require('../models/order')
const Product = require('../models/product')

function getOrder(req, res) {
    Order.findOne().populate("products").exec((err, order) => {
        res.json(order);
        })
    };

function getProducts(req, res) {
    Product.find({}, function(err, products) {
        res.json(products);
    });
}

function addProduct(req, res) {

}

function removeProduct(req, res) {

}

function checkout(req, res) {

}

module.exports = {
    getOrder,
    getProducts,
    addProduct,
    removeProduct,
    checkout
}