const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.listen(5000, () => {
  console.log("server running on local host 5000");
});

// routes

// create todo
app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.messsage);
  }
});
// get a todo

// get all todo

// update todo

// delete todo
