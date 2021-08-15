require('dotenv').config();

const productData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/Products')

connectDB();

const importData = async () => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productData)
        console.log('imports success')
        process.exit();
    } catch (error) {
        console.error('error with imports')
        process.exit(1);
    }
};

importData();