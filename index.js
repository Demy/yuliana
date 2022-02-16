const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(express());
const port = 8000;

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json())

const db = require("./app/models");
// const Role = db.role;
// function initial() {
//   Role.create({ id: 1, name: "user" });
//   Role.create({ id: 2, name: "moderator" });
//   Role.create({ id: 3, name: "admin" });
// }
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
db.sequelize.sync();

app.listen(
  port,
  () => {
    console.log(
      `Server is running on the port no: ${(port)} `
    )
  }
);

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/project.routes')(app);
