var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'flowers'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
})


    module.exports = {
        getAllOccasions: function (callback) {
          const sql = 'SELECT * FROM `occasions`';
          connection.query(sql, function (error, results, fields) {
            callback(error, results);
          });
        },

        getOneOccasion: function(name, callback) {
          const sql = 'SELECT * FROM `occasions` WHERE `name` = ?';
          connection.query(sql, [name], function(error, results, fields) {
              callback(results, error);
          });
      }
      ,
        postOccasion: function (body, callback) {
          const sql = 'INSERT INTO `occasions` SET name = ?, description = ?, image = ?, price = ?, category = ?, id = ?';
          const { name, description, image, price, category, id } = body;
          
          connection.query(sql, [name, description, image, price, category, id], function (errors, results, fields) {
              callback(errors, results);
          });
      }, 
        updateOccasion: function (id, myOccasion, callback) {
          const sql = 'UPDATE `occasions` SET ? WHERE id = ?';
          connection.query(sql, [myOccasion, id], function (errors, results, fields) {
            callback(errors, results);
          });
        }
        
        ,
        deleteOccasion: function(id,callback){
            const sql = 'DELETE FROM `occasions` where id = ?';
            connection.query(sql,[id],function(error,results,fields){
                callback(error,results)
            })
        }, 
        getAllPlants: function (callback) {
            const sql = 'SELECT * FROM `plants`';
            connection.query(sql, function (error, results, fields) {
              callback(error, results);
            });
          },
  
          getOnePlant: function(name,callback){
              const sql='SELECT * FROM `plants` WHERE `name` = ?';
              connection.query(sql,[name],function(error,results,fields){
              callback(results,error)
              })
          },
          postPlant: function (body, callback) {
            const sql = 'INSERT INTO `plants` SET name = ?, description = ?, image = ?, price = ?, category = ?, id = ?';
            const { name, description, image, price, category, id } = body;
            
            connection.query(sql, [name, description, image, price, category, id], function (errors, results, fields) {
                callback(errors, results);
            });
        }, 
          updatePlant: function (id, myPlant, callback) {
            const sql = 'UPDATE `plants` SET ? WHERE id = ?';
            connection.query(sql, [myPlant, id], function (errors, results, fields) {
              callback(errors, results);
            });
          }
          
          ,
          deletePlant: function(id,callback){
              const sql = 'DELETE FROM `plants` where id = ?';
              connection.query(sql,[id],function(error,results,fields){
                  callback(error,results)
              })
          }
  ,
  getByCategoryOccasions : function (category, callback) {
    const query = 'SELECT * FROM `occasions` WHERE category=?';
    connection.query(query, [category], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}, 
 getByCategoryPlants : function (category, callback) {
  const query = 'SELECT * FROM `plants` WHERE category=?';
  connection.query(query, [category], (err, result) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, result);
      }
  });
}
        

      };
      

