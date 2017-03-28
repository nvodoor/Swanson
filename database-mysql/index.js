var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'swanson'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items ORDER by rand() LIMIT 10', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertAll = function(body) {
  var queryString = 'INSERT INTO items (description) VALUES (?)'
  connection.query(queryString, [body], function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log("hi");
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.insertAll = insertAll;
