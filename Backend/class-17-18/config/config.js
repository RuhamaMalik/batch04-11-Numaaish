const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://projectzone734:rgm098765@numaaishcluster.znsqu5d.mongodb.net/e-com?retryWrites=true&w=majority&appName=NumaaishCluster`)
  .then(
    () => console.log("DB is Connected")
  ).catch((err) => console.log("ERROR in db connection : ", err)
  )
