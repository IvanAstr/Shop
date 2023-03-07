const category = require('../models/categories');
const product = require('../models/product');
const store = require('../models/stores');

exports.categories = async (req, res, next) => {
    const categories = await category.findOne({
        where: {
            id: req.body.id
        }
    })
    
    if (!categories) {
        return res.status(400).json({
            message: 'Category not found'
        });
    }
    res.status(200).json(category);

    category.destroy({where: {id: req.body.id}})
    res.status(200).json({message: 'Category destroy successfully'});
}

exports.stores = async (req, res, next) => {
    const stores = await store.findOne({
        where: {
            id: req.body.id
        }
    })
    
    if (!stores) {
        return res.status(400).json({
            message: 'Store not found'
        });
    }
    res.status(200).json(store);
    store.destroy({where: {id: req.body.id}})

    res.status(200).json({message: 'Store destroy successfully'});
}

exports.products = async (req, res, next)=>{
    const products = await product.findOne({
        where:{
             id: req.body.id
        }
    })

    if(!products){
        return res.status(400).json({message: 'Product not found'})
    }

    product.destroy({where: {id: req.body.id}})
    res.status(200).json({message: 'Product destroy successfully'});
}