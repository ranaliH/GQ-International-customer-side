const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error("error")
        res.status(500).json({message: "server error"})
    }
} 

const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);

        res.json(products);
    } catch (error) {
        console.error("error")
        res.status(500).json({message: "server error"})
    }
} 

module.exports = {
    getAllProducts,
    getProductById,
};