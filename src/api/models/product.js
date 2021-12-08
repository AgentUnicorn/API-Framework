var db = require('mongoose');

db.connect(process.env.MONGODB)

const productSchema = new db.Schema({
    name: String
})