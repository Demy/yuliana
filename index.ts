const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(express());
const port: Number = 8000;

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json())

app.listen(
  port,
  () => {
    console.log(
      `Server is running on the port no: ${(port)} `
    )
  }
);

require('./routes/auth.routes')(app);
require('./routes/project.routes')(app);
