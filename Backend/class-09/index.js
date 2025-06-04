const express = require("express");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA.json")


/////////// postman

app.use(express.urlencoded({ extended: false }));


app.get("", (req, res) => {
     res.send("Home Page")
})

// app.get("/users", (req,res)=>{
//     // const userHtml =  users.map((user)=>{
//     //    return `<li> ${user.first_name}</li>`
//     // })

//     const userHtml = `
//     ${users.map((user)=>{
//        return `<li> ${user.first_name}</li>`
//     }).join("")
//     }
//     `

//    res.send(userHtml)
// })



// app.get("/api/users", (req,res)=>{
// res.json(users);
// })

//  REST API'S



app.get("/users", (req, res) => {
     res.json(users);
});

// app.get("/user/:id", (req,res)=>{
//   const user =users.find((user)=> user.id === Number(req.params.id));
//   res.json(user);
// });
// app.patch("/user/:id", (req,res)=>{

//   res.json({});
// });
// app.delete("/user/:id", (req,res)=>{

//   res.json({});
// });
// app.put("/user/:id", (req,res)=>{

//   res.json({});
// });

app.route("/api/user/:id")
     .get((req, res) => {
          const user = users.find((user) => user.id === Number(req.params.id));
          return res.json(user);
     })
     .patch(
          (req, res) => {
               const id = req.params.id;
               const data = req.body;
               let user = users.find((user) => user.id === Number(id)); // find user


               ////// update user
               for (const key in data) {
                    if (Object.prototype.hasOwnProperty.call(user, key)) {
                         user = { ...user, [key]: data[key] }

                    }
               }

               //// update user in users
               users[user.id-1] = user;

               /// update data in file
               fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
                     return res.json({ message: "User Updated Successfully!", user })
               })

              
          }
     )



app.post("/users", (req, res) => {
     users.push({ ...req.body, id: users.length + 1 })
     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
          res.json({
               message: "user created successfully!",
               userId: users.length + 1
          }
          )
     })
     // res.send("hello");
});







app.listen(8000, () => console.log("server is running on port 8000")
)