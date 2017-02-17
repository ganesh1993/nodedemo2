/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('xyz.db');

db.serialize(function() {
    var csql3 = "create table if not exists school(fullName text, fullAddress text, contact int)";
    var isql = "insert into school(fullName,fullAddress,contact) values('NHS','Kalyan',7738420894)";
    var isql1 = "INSERT INTO company(fullName,fullAddress,contact,comAbout) VALUES(?,?,?,?)";
    db.run(isql1, ['affixus', 'belapur', 7738420894, 'nice']);
    db.run(csql3);
    var tsql = "CREATE TABLE IF NOT EXISTS ACCOUNT(" +
        " account_no   INTEGER PRIMARY KEY NOT NULL," +
        " balance      DECIMAL NOT NULL DEFAULT 0)";
    db.run(tsql);

    var tsql1 = "CREATE TABLE IF NOT EXISTS ACCOUNT_CHANEGS(" +
        " account_no       integer not null," +
        " flag             text not null," +
        " amount           decimal not null," +
        " changed_at       text not null);"
    db.run(tsql1);

    /* var tisql = "INSERT INTO account(account_no,balance)VALUES (100,20100)";
     var tisql2 = "INSERT INTO account(account_no,balance)VALUES (200,10100);"

     db.run(tisql);
     db.run(tisql2);*/

    var ssql = "SELECT * FROM account;"
    db.each(ssql, function (err, row) {
        console.log(row);
    });

})
db.close();