var express = require('express');
var router = express.Router();

TMDBCon = require('../controller/TMDBController.js')


router.get('/TMDB',TMDBCon.Popular_Movies, function(req, res, next) {
    
});

router.get('/TMDB/:query',TMDBCon.Movie_Search, function(req, res, next) {
    
});

module.exports = router;
