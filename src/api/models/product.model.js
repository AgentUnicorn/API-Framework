var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/csdl_ggshop');

// Product Schema
var ProductSchema = mongoose.Schema({
    
    _id: {
        type: Number,
        required: true
    },
    brand: {
        type: String
    },
    currency: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: 'images/default.jpg'
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});
var    Product= mongoose.model('product',ProductSchema)
module.exports=Product;


