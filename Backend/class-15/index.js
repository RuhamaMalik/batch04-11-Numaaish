const express = require('express')
const {ObjectId} =  require("mongodb");
const db = require("./db");
const app = express()
const port = 8000;

// app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'));

app.post("/products",async(req,res)=>{
    const productRef = (await db()).collection("products");
    const result = await productRef.insertOne(req.body);
    if(result?.acknowledged){
        res.send({message:"Product inserted"})
    }
})

app.get("/products", async (req,res)=>{
    const productRef = (await db()).collection("products");
    const data = await productRef.find().toArray()
console.log(data);
res.json({message:"produts fetched successfuly!", data})
})


app.put("/products/:name", async (req,res)=>{
const productRef = (await db()).collection("products");
const result = await productRef.updateOne(
    // {_id:req.params.id},
    {name:req.params.name},
    {$set:req.body}
);

res.send({message:"produt updated successfuly!", result})

})

app.delete("/products/:id", async (req,res)=>{
const productRef = (await db()).collection("products");
const result = await productRef.deleteOne({
    _id: new  ObjectId(req.params.id)
});

res.send({message:"produt deleted successfuly!", result})

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))