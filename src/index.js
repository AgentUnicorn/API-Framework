require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var fileUpload = require('express-fileupload');
var cors = require('cors');

const PORT = process.env.PORT;

//Define route
var productsRoute = require('./api/routes/productsRoute')

app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    cors({
        origin: "*"
    })    
)

//Use route
app.use('/api/products', productsRoute);

app.listen(
    PORT, 
    () => console.log(`Server is runnign on port ${PORT}`)
)