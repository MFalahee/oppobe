let taco = process.env.GMAP_API_KEY

class apiController {
    static root(req, res) {
        res.status(200).json(taco)
    }
}

module.exports = apiController