const Restaurant = require('../models/restaurant')


exports.getRestaurant = async (req, res) => {
    try {
        const result = await Restaurant.find({}).limit(10)
        res.status(200).json({
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}