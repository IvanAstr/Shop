const category = require('../models/categories');
const product = require('../models/product');
const store = require('../models/stores');

exports.categories = async (req, res, next) => {
    const categories = await category.findOne({where: {categoryName: req.body.categoryName}});
    if(categories){
        return res.status(400).json({message:"Категория с таким именем уже существует"});
    }
    category.create({
        categoryName: req.body.categoryName
    });
    res.status(200).json({
        message: 'Category created successfully'
    });
}

exports.stores = async(req, res, next)=> {
    const sotores = await store.findOne({where: {storeName: req.body.storeName}});
    if(sotores){
        return res.status(400).json({message:"Такой магазин уже зрегестрирован в бд"})
    }

    store.create({
        storeName: req.body.storeName
    })

    res.status(200).json({
        message: "store created successfully"
    })
}

exports.product = async(req, res, next)=> {
    const products = await product.findOne(
        {where: {
                name: req.body.name, 
                description: req.body.description, 
                color: req.body.color,
                articleNumber: req.body.articleNumber, 
                gender: req.body.gender,
                category: req.body.category,
                store: req.body.store,
                price: req.body.price
            }
        });
    if(products){
        return res.status(400).json({message:"Такой товар уже зрегестрирован в бд"})
    }
    product.create({
        name: req.body.name, 
        description: req.body.description, 
        color: req.body.color, 
        articleNumber: req.body.articleNumber, 
        gender: req.body.gender,
        category: req.body.category,
        store: req.body.store,
        price: req.body.price
    })

    res.status(200).json({
        message: "store created successfully"
    })
}

