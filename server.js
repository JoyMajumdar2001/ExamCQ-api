const express = require("express");
const cors = require("cors");

bodyParser = require("body-parser");

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const app = express();

var corsOptions = {
  origin: "https://determined-mahavira-6be689.netlify.app",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://node:uHmZFkQzbjAWwNIM@clusterdrop.r9rmv.mongodb.net/examcq?retryWrites=true&w=majority"
);
const examSchema = new Schema({
  name: String,
  uid: String,
  data: String,
  created: String,
  modified: String,
  responses: Number,
});
var ExamModelSch = mongoose.model('Exams', examSchema);

function inserMongo(req) {
    const ExamModel = new ExamModelSch();
  ExamModel.name = req.body.name;
  ExamModel.uid = req.body.uid;
  ExamModel.created = req.body.created;
  ExamModel.modified = req.body.modified;
  ExamModel.data = req.body.data;
  ExamModel.responses = req.body.responses;
  ExamModel.save();
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ExamCQ server." });
});

app.post("/create", function (req, res) {
    inserMongo(req);
  res.json({ message: "Added" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
