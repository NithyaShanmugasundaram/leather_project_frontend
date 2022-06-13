const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_originalprice: {
        type: String,
        required: true,
    },
    product_offerprice: {
        type: String,

    },
    product_description: {
        type: String,

    },
    user_password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },

})
module.exports = mongoose.model('products', ProductSchema)