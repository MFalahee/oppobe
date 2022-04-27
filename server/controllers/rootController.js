

class rootController { 
        static root(req, res) {
            res.status(200).json("So.. you have come to meet your maker?")
        }
}

module.exports = rootController