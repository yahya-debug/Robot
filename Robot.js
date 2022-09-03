const router = require('express').Router();
const ID = require('./Libraries/ID.js');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'john',
  password: 'd4h1mw4tchw1thme123',
  database: 'myrobot',
  multipleStatements: true
});
connection.connect(() => console.log('connected to SQL'));


router.get('/robot/getByID:ID', function (req, res) {
  const sql = `SELECT * FROM robot WHERE id = ?`;
  connection.query(sql, req.params.ID, function (err, result, fields) {
    if (result[0] == undefined) {
      return res.send({ msg: undefined });
    }
    res.send(result[0]);
  })
});
router.post('/robot/new', function (req, res) {
  const id = new ID(15).generate();
  const { name, voice, age, avatar } = req.body;
  const sql = `INSERT INTO robot VALUES (?, ?, ?, ?, ?);
               SELECT * FROM robot WHERE id = ?`;
  connection.query(sql, [id, name, age, voice, avatar, id], function (err, result, fields) {
    if (err) {
      throw err;
    }
    res.send(result[1][0]);
  })
});
router.get('/robot/edit', function (req, res) {
  const { field, value, forr } = req.query;
  const sql = `UPDATE robot SET ${field} = ? WHERE id = ?`;
  connection.query(sql, [value, forr], function (err, result, fields) {
    if (err) {
      throw err;
    }
    res.send({ msg: 'done' });
  })
})

module.exports = router;
