const db = require("../database/db.js");

exports.getUser = (req, res) => {
  db.query("SELECT * FROM tbl_users", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM tbl_users WHERE id = ${id}`, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
};

exports.addUser = (req, res) => {
  const { nama, jenis_kelamin, jurusan } = req.body;
  const query = `INSERT INTO tbl_users (nama, jenis_kelamin, jurusan) VALUES ('${nama}', '${jenis_kelamin}', '${jurusan}')`;
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM tbl_users WHERE id = ${id}`;
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
};


