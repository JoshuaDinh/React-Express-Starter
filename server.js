const express = require("express");
const app = express();

const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstname: "Josh",
      lastname: "Dinh",
    },
    {
      id: 2,
      firstname: "Jane",
      lastname: "Doe",
    },
    {
      id: 3,
      firstname: "John",
      lastname: "Doe",
    },
  ];

  res.json(customers);
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
