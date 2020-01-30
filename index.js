const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const middleware = [express.json()];
app.use(middleware);
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to my api" });
});

let db = [
  {
    firstname: "John",
    lastname: "Doe"
  },
  {
    firstname: "Steven",
    lastname: "Robinson"
  },
  {
    firstname: "Random",
    lastname: "Guy"
  }
];

app.get("/db", (req, res) => {
  res.status(200).json({ db });
});

app.post("/db/:action", (req,res) => {
  const action = req.params.action;
  if (action === 'add') {
      db = [...db, { firstname: "New", lastname: "Guy" }];
    res.status(200).json({db});
  }else if(action === 'remove'){
      db.pop()
      res.status(200).json({db})
  }else{
      res.status(400).json({error:"Incorrect action"})
  }
});
module.exports = app;
