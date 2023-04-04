const Product = require('../models/product')


exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        const result = await product.populate('Category')
        res.json({ status: true, result })

    } catch (error) {
        res.json({ status: false, error })
    }
}