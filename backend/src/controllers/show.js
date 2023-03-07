const product = require('../models/product');

exports.productsCategory = async (req, res, next) =>{
    const products = await product.findAll({where: {category: req.params.id}});
    if(!products){
        res.status(400).json({message: 'Products not found'});
    }

    res.status(200).json(products);

}

exports.product = async (req, res, next)=>{
    const Product = await product.findOne({
        where:{
             id: req.params.id
        }
    })
    if(!Product){
        return res.status(400).json({message: 'Product not found'})
    }

    
    res.status(200).json(Product);
}