
API_BASE_URL = "https://api.themoviedb.org/3"

module.exports = {
    Popular_Movies: async function (req, res, next) {
        const URL = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
        const OPTIONS = {
            method: 'GET',
             headers: {
                accept: 'application/json',
                Authorization: `Bearer fds` 
            }
        }
        fetch(URL, OPTIONS)
            .then(res => res.json())
            .then(json => res.json(json))
            .catch(err => res.json(err));
    },

    Movie_Search: async function (req, res, next) {
    }
}