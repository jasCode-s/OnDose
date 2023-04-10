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
    when: {
        type: Date,
        required: [true, "Please provide the times when you want to take the medication"],
        unique: false,
    },
    pill_count: {
        type: Number,
        required: false,
        unique: false,
    },
})

module.exports = mongoose.model.Medications|| mongoose.model("Medications", MedicationSchema);