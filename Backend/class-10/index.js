const express = require('express')
const checkAge = require("./middleware");
const fs = require('fs')
const app = express()
const port = 8000


// const checkAge = (req, res,next) => {
//     const age = req.query.age;

//     if (!age) {
//         res.json({message:"Age is required!", success:false})
//     } else if (age < 18 || age > 75) {
//             res.send({message:"You cannot access the content", success:false})
//     } else{
//         req.country ="China"
//         next()
//     }

// }


// const secondMiddleware=(req, res,next)=>{
// const gender = req.query.gender;
//  if (!gender) {
//         res.json({message:"Gender is required!", success:false})
//     } else if (gender.toLowerCase() === "male") {
//             res.send({message:"Only females can access the content", success:false})
//     }else{
//         next()
//     }
// }
// const thirdMiddleware=(req, res,next)=>{
// const country = req.country;
//  if (!country) {
//         res.json({message:"Oops something went wrong!", success:false})
//     } else if (country.toLowerCase() !== "pakistan") {
//             res.send({message:"Website is not accessible in this region" + req.country, success:false})
//     }else{
//         next()
//     }
// }


// app.use(checkAge)
// app.use(secondMiddleware)
// app.use(thirdMiddleware)


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', checkAge, (req, res) => res.send('About Page!'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))