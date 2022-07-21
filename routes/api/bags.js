const express = require("express");
const Products = require("../../models/Products");
const router = express.Router()

//Get all bag products from database
router.get('/', async (req, res) => {
    //console.log('firstreq :>> ', req);
    try {
        const products = await Products.find()
        res.json(products)
    }
    catch (err) {
        res.status(500).json('Server Error')
    }
})
//Get single product by using ID
router.get('/:bag_id', async (req, res) => {

    console.log('req.params.bag_id ', req.params.bag_id);
    try {
        const product = await Products.findById(req.params.bag_id)
        console.log('products', product)
        res.json(product)
    }
    catch (err) {
        //console.log(err.message)
        res.status(500).json('Server Error')
    }
})

module.exports = router