
API_BASE_URL = "https://api.themoviedb.org/3"

module.exports = {
    Popular_Movies: async function (req, res, next) {
        const URL = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
        const OPTIONS = {
            method: 'GET',
             headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}` 
            }
        }
        fetch(URL, OPTIONS)
            .then(res => res.json())
            .then(json => res.json(json))
            .catch(err => res.json(err));
    },

    Movie_Search: async function (req, res, next) {
        let query = req.params.query;
        const URL = `${API_BASE_URL}/search/movie?query=${query}`
        const OPTIONS = {
            method: 'GET',
             headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}` 
            }
        }
        fetch(URL, OPTIONS)
            .then(res => res.json())
            .then(json => res.json(json))
            .catch(err => res.json(err));
    },

    //curently being tested
    specific_Movie: async function (req, res, next) {
        const URL = `${API_BASE_URL}/discover/movie/${movieID}?append_to_response=credits`
        const OPTIONS = {
            method: 'GET',
             headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}` 
            }
        }
        fetch(URL, OPTIONS)
            .then(res => res.json())
            .then(json => res.json(json))
            .catch(err => res.json(err));
    }
}