const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//connecting to mongodb atlas database
const db = require("./models/");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ispirithalei." });
});

require("./routes/doctorSession.routes")(app);
<<<<<<< HEAD
require("./routes/creditCard.routes")(app);
=======
require("./routes/inventory.routes")(app);
>>>>>>> ee8645cfb5a081a4dd3467c9a7a5f2b2e11588cc

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
