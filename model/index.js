const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/admin";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  !err ? console.log("successful") : console.log(err);
});
