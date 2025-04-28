
const sdk = require('node-appwrite');
const { ID, Query } = sdk;

let client = new sdk.Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY)

const database = new sdk.Databases(client);

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID;

module.exports = {
    updateSearchCount: async function (req) {
        try{
            const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[
                Query.equal('Title', req.body.Title)])
                if(result.documents.length > 0){
                    const doc = result.documents[0]
                    await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                        Count: doc.Count + 1
                })
                } else {
                    await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                        Title: req.body.Title,
                        Count: 1,
                        movie_ID: req.body.MovieID,
                        poster_URL: req.body.Poster,
                
                    })
                }
        }catch(error){
            console.error('Error updating search count:', error)
        }
        res.end()
    },
    
    getTrendingMovies: async function (req, res) {
        try{
            const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID, [
                Query.limit(5),
                Query.orderDesc("Count")
            ])
            const sanatizedDoc = result.documents.map(doc => ({
                movie_ID: doc.movie_ID,
                Title: doc.Title,
                poster_URL: doc.poster_URL

            }))
            return res.json({results:sanatizedDoc})
            
        }catch(error){
            console.error('Error fetching trending movies:', error);
        }
    }
}