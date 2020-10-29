const express = require("express");
const path = require("path");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const Exercise = require("./models/exercise");

const app = express();

const PORT = process.env.PORT || 9090;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitness-tracker";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Error: ", error);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html/index.html"), () => {
        console.log("main page reached");
    });
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html/exercise.html"), () => {
        console.log("Exercise page reached");
    });
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html/stats.html"), () => {
        console.log("stats page reached");
    });
});

app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
