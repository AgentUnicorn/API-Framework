var mongoose= require('mongoose');

// Product Schema
var ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        require: [true, "Name is required"]
    },
    brand: {
        type: String,
        trim: true,
        lowercase: true,
        require: [true, "Brand is required"]
    },
    type: {
        type: String,
        lowercase: true,
        require: [true, "Brand is required"]
    },
    currency: {
        type: String,
        default: 'USD'
    },
    price: {
        type: Number,
        default: 100
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
});

const ProductSchemaVirtual = ProductSchema.virtual('fullname');

ProductSchemaVirtual.get(function() {
    return `${this.brand} ${this.name} ${this.type}`
})

var Product= mongoose.model('product', ProductSchema)

module.exports = Product;


