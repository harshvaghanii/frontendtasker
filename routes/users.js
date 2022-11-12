let mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/newtask", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection succesful!");
  })
  .catch((e) => {
    console.log(e);
  });

let schema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("newtask", schema);
