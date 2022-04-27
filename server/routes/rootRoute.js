const express = require('express');
const rootController = require('../controllers/rootController');

//Routers will help us separate the logic from the routes, making the code more readable

const router = express.Router();

router.route('/').get(rootController.root);

module.exports = router