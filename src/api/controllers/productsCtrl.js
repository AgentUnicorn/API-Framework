getAllProducts = (req, res) => {
    res.status(200).send({
        text: "Hello world"
    })
}

module.exports = {getAllProducts}