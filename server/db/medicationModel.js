const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the medication name."],
        unique: false,
    },
    dosage: {
        type: String,
        required: [true, "Please provide the dosage information."],
        unique: false,
    },
    frequency: {
        type: String,
        required: [true, "Please provide the frequency to take the medication"],
        unique: false,
    },
    time: {
        type: String,
        required: [true, "Please provide the times when you want to take the medication"],
        unique: false,
    },
    pill_count: {
        type: Number,
        required: false,
        unique: false,
    },
    completed: {
        type: Boolean,
        required: true,
        unique: false,
    },
    timesLeft: {
        type: Number,
        required: false,
        unique: false,
    },
    ingredients: {
        type: String,
        required: true,
        unique: false,
    },
    sideEffects: {
        type: String,
        required: true,
        unique: false,
    },
    image: {
        type: String,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    interaction: {
        type: String,
        required: true,
        unique: false,
    },
});

module.exports = mongoose.model.Medications|| mongoose.model("Medications", MedicationSchema);