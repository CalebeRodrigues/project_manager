const express= require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.status(200).send('API for project TCC (Manager project)');
});

module.exports = route;
