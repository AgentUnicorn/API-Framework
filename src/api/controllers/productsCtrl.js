getAllProducts = (req, res) => {
    res.status(200).send({
        text: "Hello world 222"
    })
}

module.exports = {getAllProducts}