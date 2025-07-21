const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
let myname="Md's";

app.get('/', (req, res) => {
  res.send(`Hello from ${myname} Node.js app deployed on EC2!`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
