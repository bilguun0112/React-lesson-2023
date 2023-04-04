const User = require('../models/user')
const ShippingAddress = require('../models/shippingAddress');
const Product = require('../models/product');

exports.createTransaction = async (req, res) => {
    try {
        const session = await User.startSession();
        session.startTransaction();

        const product = await Product.updateOne(
            { _id: '64224e2ab52cd19201b7bd6a' },
            { $inc: { quantity: -2 } },
            { session }
        )
        console.log('product', product)

        const user = await User.create(req.body.user, { session });
        const shippingAddress = await ShippingAddress.create(
            req.body.shippingAddress, { session }
        );
        await session.commitTransaction()
        session.endSession()
        res.json({ status: true, user, shippingAddress })
    } catch (error) {
        res.json({ status: false, error })
    }
}

exports.createTransactionWithOutSession = async (req, res) => {
    try {
        const product = await Product.updateOne(
            { _id: '64224e2ab52cd19201b7bd6a' },
            { $inc: { quantity: -2 } }
        )

        const user = await User.create(req.body.user);
        const shippingAddress = await ShippingAddress.create(
            {
                address: req.body.shippingAddress,
                user_id: user._id,
            }
        );
        res.json({ status: true, user, shippingAddress, product })
    } catch (error) {
        res.json({ status: false, error })
    }
}