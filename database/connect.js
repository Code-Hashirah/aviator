const mysql2 = require('mysql2');
let connect = mysql2.createPool({
    host:"localhost",
    user:'root',
    database: 'aviator',
    password: ''
})

module.exports=connect.promise();