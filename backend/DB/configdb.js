const moongose = require("mongoose");

const DB =
  "mongodb+srv://dbUser:dbUser@cluster0.1vlv5.mongodb.net/?retryWrites=true&w=majority";

console.log(DB);

moongose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => {
    console.log(err);
  });
