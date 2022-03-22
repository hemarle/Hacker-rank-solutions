const mongoose = require("mongoose");
const schema = {
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
};
const db_Schema = mongoose.Schema(schema);

module.export = mongoose.model("Authors", db_Schema);
