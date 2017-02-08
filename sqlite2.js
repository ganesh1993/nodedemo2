/**
 * Created by lenovo on 08/02/2017.
 */

var sqlite3 = require('sqlite3').verbose();


var db = new sqlite3.Database('xyz.db');
console.log(db)
//create table
var csql = "create table if not exists person(firstName text)";
var csql1 = "create table if not exists college(fullName text)";
var csql2 = "create table if not exists classes(fullName text, fullAddress text, contact int)";
var csql3 = "create table if not exists company(fullName text, fullAddress text, contact int, comAbout)";
db.run(csql);
db.run(csql1);
db.run(csql2);
db.run(csql3);




db.close();