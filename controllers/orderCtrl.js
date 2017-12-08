const Order = require('../models/score')
const Product = require('../models/product')

function getOrder(req, res) {
    Order.findOne({}, function(err, order) {
        order.populate("products");
        res.json(order);
    });
}

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