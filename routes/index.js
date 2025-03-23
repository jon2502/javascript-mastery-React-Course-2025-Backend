var express = require('express');
var router = express.Router();

TMDBCon = require('../controller/TMDBController.js')


router.get('/TMDB',TMDBCon.API_OPTIONS, function(req, res, next) {
  
});

module.exports = router;
