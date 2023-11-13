const mysql = require("mysql");

const db = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "demo-express",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

module.exports = db;
