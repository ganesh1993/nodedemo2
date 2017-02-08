/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('xyz.db');

db.serialize(function(){
    var csql3 = "create table if not exists school(fullName text, fullAddress text, contact int)";
    var isql = "insert into school(fullName,fullAddress,contact) values('NHS','Kalyan',7738420894)";
    var isql1 = "INSERT INTO company(fullName,fullAddress,contact,comAbout) VALUES(?,?,?,?)";
    db.run(isql1,['affixus','belapur',7738420894,'nice']);
    db.run(csql3);

})


db.close();