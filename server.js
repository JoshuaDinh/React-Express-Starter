const express = require("express");
const app = express();

const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstname: "josh",
      lastname: "dinh",
    },
    {
      id: 2,
      firstname: "yui",
      lastname: "akiyama",
    },
    {
      id: 3,
      firstname: "audrey",
      lastname: "davenport",
    },
  ];

  res.json(customers);
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
