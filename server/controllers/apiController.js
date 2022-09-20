let taco = process.env.GMAP_API_KEY;
let salsa = process.env.WEATHER_KEY;

class apiController {
  static root(req, res) {
    res.status(200).json(taco);
  }
  static weather(req, res) {
    res.status(200).json(salsa);
  }
  static earth(req, res) {
    res.status(200).json("earth");
  }
}

module.exports = apiController;
