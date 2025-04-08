const express = require("express");

const app = express();
let users = [
  { id: 1, name: "john", email: "dfbcbvcirnnvnrfjrifji" },
  { id: 1, name: "john", email: "dfbcbvcirnnvnrfjrifji" },
  { id: 1, name: "john", email: "dfbcbvcirnnvnrfjrifji" },
];
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(9000, () => {
  console.log("Server Is Running On Port 9000");
});

