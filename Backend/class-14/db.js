const {MongoClient} = require("mongodb");

const connectionString = `mongodb+srv://projectzone734:rgm098765@numaaishcluster.znsqu5d.mongodb.net/?retryWrites=true&w=majority&appName=NumaaishCluster`;
const dbName = "e-com";
const client = new MongoClient(connectionString);

const connectDb = async ()=>{
   const clientConnection = await client.connect();
  const db =  clientConnection.db(dbName)
  return db;
}

module.exports = connectDb;