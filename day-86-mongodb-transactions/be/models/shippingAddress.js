const mongoose = require('mongoose')

const shipAdressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const ShippingAddress = mongoose.model("shippingAddress", shipAdressSchema)

module.exports = ShippingAddress