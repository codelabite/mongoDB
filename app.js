const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/note";
const app = express();
const con = mongoose.connection;

mongoose.connect(url, { useNewUrlParser: true });

con.on("open", () => {
  console.log("Getting ready for Data");
});

app.use(express.json());

const dataLister = require("./routers/routeController");
app.use("/tesing", dataLister);

app.listen(8000, () => {
  console.log("port 8000 is now open!");
});
