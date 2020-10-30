const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    totalDuration: Number,

    exercises: [{
        type: {
          type: String,
        },
        name: {
          type: String,
          trim: true,
          required: "Name of exercise is required"
        },
        distance: {
          type: Number
        },
        duration: {
          type: Number
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        }
      }]
  }
  
);

workoutSchema.methods.durationCalculator = function() {
  let totalDuration = 0;
  for (var i = 0; i < this.exercises.length; i++){
    totalDuration += this.exercises[i].duration;
  }
  this.totalDuration = totalDuration;
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;