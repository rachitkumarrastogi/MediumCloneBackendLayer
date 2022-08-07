const {MongoClient} = require('mongodb');

async function main(){

    const MONGODB_URI = "mongodb+srv://Content_team:Content_Team_GL@cluster0.8esbc.mongodb.net/?retryWrites=true&w=majority";
 
    const client = new MongoClient(MONGODB_URI);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await listDatabases(client);
        
        // Fetch All collections
        await listCollection(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 clearImmediate
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// async function listCollection(client) {
//     // allFiles = client.db("articles").collection("files").find();    
//     // console.log(client.db("articles").collection("files").find())
//     for (record in client.db("articles").collection("files").find({})){
//         console.log(`${record}`);
//     }
// }




 