const express = require('express')
const app = express()
const port = 5000;
const {MongoClient} = require("mongodb")

const url = "mongodb+srv://projectzone734:1234567@numaaishcluster.znsqu5d.mongodb.net/?retryWrites=true&w=majority&appName=NumaaishCluster"
const databasename = "e-com";

const client = new MongoClient(url);

const dbConnection = async()=>{
    const connection =  await client.connect()
        const db=   connection.db(databasename);
    const collectionRef= db.collection("products");

    const result = await collectionRef.insertOne({
        name: "Ruhama",
        email:"ruhama@gmail.com"
    })

    console.log(result);

}

dbConnection();


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))