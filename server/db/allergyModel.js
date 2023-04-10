const mongoose = require("mongoose");

const AllergiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the allergy name."],
        unique: false,
    },
    reaction: {
        type: String,
        required: [true, "Please provide the allergic reaction."],
        unique: false,
    },
})

module.exports = mongoose.model.Allergies|| mongoose.model("Allergies", AllergiesSchema);