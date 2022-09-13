require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(userRoutes);

const mongoUri = "mongodb+srv://cantant:ayorinde@cluster0.cgq2kle.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Welcome Page");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
