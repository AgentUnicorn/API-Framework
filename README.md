# GGSHOP-API
This is REST API of ggshop which is an e-commerce website.
Client can get all the products detail from this api.
Currently in development by a team of 6 people for a teamwork assginment.

## Prepare
You need to make sure that you have all the dependencies are installed
```
npm install
```

Then add a file named `.env` and add this line of code
```
PORT = 3000 (or any port that you want: 7000, 8000, 8080, etc..)
```

## Start Server
After that, you can start the server by type this command
```
npm start
```

# REST API
Desscribed your api here

## Get list of all products
### Request
`GET /products`
```
http://localhost:3000/api/products
```

## Get a specific products
`GET /products/id`
```
http://localhost:3000/api/products/id
```
