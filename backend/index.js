const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./User");

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://dhineshambi03:12345@cluster0.izzeacq.mongodb.net/foodappmern?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  });

app.get("/", (req, res) => {
  console.log("helloooo");
});

app.use("/user", userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
