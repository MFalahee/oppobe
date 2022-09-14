const express = require("express");
const apiController = require("../controllers/apiController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//only has 1 authenticated route to get the api key needed for maps
// authentication is currently FAKE-- will update eventually
router.route("/").all(authMiddleware).get(apiController.root);

router.route("/api").all(authMiddleware).get(apiController.weather);

router.route("/earth").all(authMiddleware).get(apiController.earth);

module.exports = router;
