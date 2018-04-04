const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    quantity: Number,
    price: Number,
    productImage: String
});

module.exports = mongoose.model('Product', productSchema);