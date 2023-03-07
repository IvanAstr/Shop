const category = require('../models/categories');
const product = require('../models/product');

exports.categories = async (req, res, next) => {
    category.findAll()
      .then(categories => {
            res.status(200).json(categories);
        })
      .catch(err => {
            res.status(500).json(err);
        });
};

exports.search = async (req, res, next) => {
    product.findAll()
    .then(products =>{
        res.status(200).json(products);
    })
    .catch(err => {
        res.status(500).json(err);
    })


};


