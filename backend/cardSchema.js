const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    categoryname: {
      type: String,
    },
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    options: [
      {
        half: Number,
        full: Number,
      },
    ],
    description: {
      type: String,
    },
  },
  { collection: "foodData" }
); // Specify the collection name here

module.exports = mongoose.model("FoodData", cardSchema);
