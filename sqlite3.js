/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('xyz.db');
console.log(db);
db.serialize(function () {
    var isql = "insert into company(fullName,fulladdress,contact,comAbout) values($fullName,$fullAddress,$contact,$comAbout)";
    db.run(isql,{$fullName:'affixus',$fullAddress:'belapur',$contact:7738456789,$comAbout:'cool'})

})
