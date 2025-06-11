var express = require('express');
var router = express.Router();

TMDBCon = require('../controller/TMDBController.js')
AppwriteCon = require('../controller/AppwriteController.js')

validator = require('../middleware/validators.js')


router.get('/TMDB',TMDBCon.Popular_Movies, function(req, res, next) {

});

router.get('/TMDB/:query',TMDBCon.Movie_Search, function(req, res, next) {
    
});

router.get('TMDB/:movieID', TMDBCon.specific_Movie, function(req, res, next) {
    
});

router.post('/Appwrite/postSearch', validator, AppwriteCon.updateSearchCount, function(req, res, next) {

})

router.get('/Appwrite/popularMovies', AppwriteCon.getTrendingMovies, function(req, res, next) {
    
})


module.exports = router;
