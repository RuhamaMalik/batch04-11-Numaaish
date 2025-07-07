const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const multer = require('multer')
const app = express()
const port = 3000;

///

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/gallery", express.static(path.join(__dirname, "assets")))

////// DB CONNECTION
mongoose.connect("mongodb://localhost:27017/gallery")
  .then(() => {
    console.log("DB Connected");

  }).catch((err) => {
    console.log("DB ERROR: ", err);

  })

/// Image Schema

const imagesCHEMA = mongoose.Schema({
  filename: String,

})
const Image = mongoose.model("image", imagesCHEMA);



////////////////// Middleware Multer

const storage = multer.diskStorage(
  {
    destination: function (req, file, cb) {
      cb(null, "assets")
    },
    filename: function (req, file, cb) {
      const _fileName = `${Date.now()}-${file.originalname}`;
      cb(null, _fileName);
    }
  }
)

const upload = multer({ storage });



////////////// Route

app.post("/api/upload", upload.single("image"), async (req, res) => {
  // console.log(">>>>>>>>>> ", req.file);

  try {
    const image = new Image({
      filename: req.file.filename
    });

    await image.save();

    res.json({
      mesage: "Image upload Sucessfully",
      filename: req.file.filename
    })

  } catch (error) {
    console.log("IMG SAVE ERROR  ", error);

  }
})


/////////// get images


app.get("/api/images", async (req, res) => {
  const images = await Image.find();

  res.json({
    mesage: "Images fetched Sucessfully",
    images: images.map((img) => ({
      id: img._id,
      filename: img.filename,
      url: `${req.protocol}://${req.get("host")}/gallery/${img.filename}`
    }))

  })
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))