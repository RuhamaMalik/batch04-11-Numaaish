const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5055; 

// Middlewares
// app.use(express.urlencoded({extended:false}))
app.use(express.json());

// DB CONNECTION

mongoose.connect(`mongodb+srv://projectzone734:rgm098765@numaaishcluster.znsqu5d.mongodb.net/?retryWrites=true&w=majority&appName=NumaaishCluster`)
.then(
    ()=>console.log("DB is Connected")
).catch((err)=>console.log("ERROR in db connection : " , err)
)    


// Schema

const userSchema =mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true,
    },

});


///////// Model

const User=mongoose.model("user", userSchema);


// ROUTES

app.post("/api/users", async(req,res)=>{
 const data = await new User(req.body);
 const user =await data.save();
res.json({message:"user created successfully!", user})
})




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`app is  listening on port ${port}!`))