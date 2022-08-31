var mysql = require('mysql');

//create konseksi DB

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'

});

conn.connect((err)=>{
    if(err) throw err;
    console.log('DATABASE Terkoneksi');
});

module.exports = conn;