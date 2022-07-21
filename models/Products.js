const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_original_price: {
        type: Number,
        required: true,
    },
    product_offer_price: {
        type: Number,

    },
    product_description: {
        type: String,

    },
    product_stars: {
        type: Number,

    },
    product_shipping_info: {
        type: String,

    },
    product_review_count: {
        type: String,

    },
    product_size: {
        type: String,

    },
    product_keypoints: {
        type: [String],

    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        //ref: 'user'
    },
    product_image: {
        type: String
    },
    product_type: {
        type: String,
    },
    product_sub_images: {
        type: Array,

    },
    product_colors: {
        type: Array,

    }

})
module.exports = mongoose.model('products', ProductSchema)