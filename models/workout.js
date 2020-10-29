const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
    },

    name: {
        type: String,
        trim: true
    },

    distance: {
        type: Number
    },

    weight: {
        type: Number
    }, 

    sets: {
        type: Number
    }, 

    reps: {
        type: Number
    }, 

    duration: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;