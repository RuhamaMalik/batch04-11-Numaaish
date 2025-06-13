const express = require("express");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA.json")


/////////// postman

app.use(express.urlencoded({ extended: false }));


app.get("", (req, res) => {
     res.send("Home Page")
})




//  REST API'S



app.get("/users", (req, res) => {
     // res.setHeader("country", "Turkey")
     // console.log(req.headers);
      res.setHeader("X-Country", "Turkey")
     res.json(users);
});



app.route("/api/user/:id")
     .get((req, res) => {
          const user = users.find((user) => user.id === Number(req.params.id));
          if(!user)res.status(404).json({message:"User Not Found"})
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
const {first_name,last_name, email, gender} = req.body
if(!first_name || !last_name || !email || !gender){
 res.status(400).json({
               error: "All fields are required",
          })
}

     users.push({ ...req.body, id: users.length + 1 })
     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
          res.status(201).json({
               message: "user created successfully!",
               userId: users.length + 1
          }
          )
     })
});







app.listen(8000, () => console.log("server is running on port 8000")
)