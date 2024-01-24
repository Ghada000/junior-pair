const db = require('../config.js');

const getAll=(callback)=>{
    const query="SELECT * FROM plants"
    db.query(query,(err,results)=>{
        if (err) {
            callback(err)
        } else {
            callback(results)
        }
    })
}

const getOneByName = (name,callback)=>{
    const query="SELECT * FROM plants where name=?"
    db.query(name,(err,plant)=>{
        if (err) {
            callback(err)
        } else {
            callback(plant)
        }
    })
}






module.exports = { getAll , getOneByName }