
const sdk = require('node-appwrite');

let client = new sdk.Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY)

const database = new sdk.Databases(client);

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID;

const updateSearchCount = async (searchTerm, movie) => {

}

const getTrendingMovies = async () =>{
    
}

module.exports = {
    
}