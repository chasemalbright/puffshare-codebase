const Product = require("../models/Products");


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "server error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "server error"});
    }
}

const updateProductCountById = async (req, res) => {
    const id = req.body.id
    const newCount = req.body.countInStock

    console.log(id, newCount);

    try {
        await Product.findById(id, (error, countToUpdate) => {
            countToUpdate.countInStock = Number(newCount);
            countToUpdate.save();
        });
    } catch (error) {
        console.log(error)
    }
    res.send("updated");
}

module.exports = {
    getAllProducts,
    getProductById,
    updateProductCountById
}