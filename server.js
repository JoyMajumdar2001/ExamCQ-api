const express = require("express");
const cors = require("cors");

const mongoose = require('mongoose');
const { Schema } = mongoose;

const app = express();

var corsOptions = {
  origin: "https://determined-mahavira-6be689.netlify.app"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true })); 

mongoose.connect('mongodb+srv://node:uHmZFkQzbjAWwNIM@clusterdrop.r9rmv.mongodb.net/examcq?retryWrites=true&w=majority');
const examSchema = new Schema({
    name:  String,
    uid: String,
    data:   String,
    created:   String,
    modified:   String,
    responses: String,
  });

  const ExamModel = mongoose.model('Exams', examSchema);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ExamCQ server." });
});

app.post('/create', function (req, res) {
    res.send(req.body)
  })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});