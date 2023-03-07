const category = require('../models/categories');
const product = require('../models/product');
const store = require('../models/stores');

exports.categories = async (req, res, next) => {
    const categories = await category.findOne({where: {id: req.body.id}})
    if (!categories) {
        res.status(404).json({message: 'Category not found'});
    }

    category.update(
        {
            categoryName: req.body.categoryName,
        },
        {where: {id: req.body.id}}
    )
    res.status(200).json({message: "category updated"});
}

exports.stores = async (req,res, next)=>{
    const stores = await store.findOne({where: {id: req.body.id}})
    if (!stores) {
        res.status(404).json({message: 'Store not found'});
    }

    store.update(
        {
            storeName: req.body.storeName,
        },
        {where: {id: req.body.id}}
    )
    res.status(200).json({message: "store updated"});
}

exports.products = async (req, res, next) =>{
    const products = await product.findOne({where: {id: req.body.id}});
    if(!products){
        res.status(400).json({message: 'Product not found'});
    }
    product.update({
        name: req.body.name, 
        description: req.body.description, 
        color: req.body.color, 
        articleNumber: req.body.articleNumber, 
        gender: req.body.gender,
        category: req.body.category,
        store: req.body.store,
        price: req.body.price
    },
    {where: {id: req.body.id}});

    res.status(200).json({message: "product updated"});

}

