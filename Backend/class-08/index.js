const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello world!'));

// app.get('/v1/about', (req, res) => res.send('Hello version 1 about!'));
// app.get('/v2/about', (req, res) => res.send('Hello version 2 about!'));




app.listen(port, () => console.log(`Server is listening on port ${port}!`))


/*
^5.1.0

0  ---------- minor fixes (optional)
1  ---------- Bug Fix / Security Fix (Recommended)
5  ---------- Major fix (Compulsory / Breaking update)
^ ---------- 3.{4.2}  npm i 
~ ---------- 3.4.{2}  npm i

5.1.0 --------- exact 5.1.0
latest -------- 5.1.0

2.1.5
2.1.6
2.2.0
3.0.0

///////////////


1) web Api
2) Soap Api


REST FULL (REpresentational state transfer)

1 ) server client arch  --- dependent nahi hen
2 ) 

       GET    ------------ /getAllUsers ----- /users
       GET    ------------ /getUser/:id ----- /user/:id
       POST -------------- /createUser  ----- /user
       PATCH -------------- /updateUser ----- /user/:id
       DELETE -------------- /deleteUser ---- /user/:id



*/