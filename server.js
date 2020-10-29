const express = require("express");
const path = require("path");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const Workout = require("./models/workout");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html/index.html"), () => {
        console.log("main page reached");
    });
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html/exercise.html"), () => {
    });
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html/stats.html"), () => {
    });
});

app.get("/api/workouts/", (req, res) => {
    Workout.find().then(results => {
        res.json(results);
    })
    
});

app.put("/api/workouts/", ({ body }, res) => {
    Workout.create(body).then(result => {
        console.log(result);
    });
});




app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
