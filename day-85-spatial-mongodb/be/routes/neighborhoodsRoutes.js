const { Router } = require('express');
const { getNeighborhoods } = require('../controllers/neighborhoods.controller');

const route = Router();

route.get('/neighborhoods', getNeighborhoods)


module.exports = route;