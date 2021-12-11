require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var mongoose= require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database")
});

const PORT = process.env.PORT;
app.listen(
    PORT, 
    () => console.log(`Server is runnign on port ${PORT}`)
)

//Define route
var productsRoute = require('./api/routes/productsRoute');
var indexRoute = require('./api/routes/indexRoute');

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
app.use('/', indexRoute);

