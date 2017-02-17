/**
 * Created by lenovo on 08/02/2017.
 */
console.log("Hello Ganesh")
var sqlite3 = require('sqlite3')
//INSERT QUERY
/*db.serialize(function () {
    var request = {"AREA_ID" : 132,"AREA":"KALYAN"};
    var isb = insertSqlBuilder("AREA",request);

    db.run(isb.sql,isb.values);



 function insertSqlBuilder(AREA,request) {

 var sqlBuilder = [];
 var str1 = "("
 var str2 = "("


 var valueParam = [];

 for(var prop in request){
 if(prop !='id'){
 str1 += prop+",";
 str2 += "?,";

 valueParam.push(request[prop]);
 }
 }

 str1 = str1.replace(/.$/,")");
 str2 = str2.replace(/.$/,")");


 sqlBuilder.sql = "INSERT INTO " + AREA + " " + str1 +"VALUES" + str2;
 sqlBuilder.values = valueParam;

 return sqlBuilder;

 };



 };

 */

//UPDATE QUERY

/*db.serialize(function () {
    var request = {"AREA" : "AMBIVALI","AREA_ID" :111};
    var usb = updateSqlBuilder("AREA",request);

    db.run(usb.sql,usb.values);

});

function updateSqlBuilder(AREA,request) {

    var sqlBuilder = {};
    var str1 = "" ;
    var str2 = "" ;

    var valueParam = [];

    for(var prop in request){
        if(prop != 'id')
        {
            str1 = str1 +  prop + "=?,";
            valueParam.push(request[prop]);


        }
    }

    str1 = str1.replace(/.$/,"");
    // WHERE CONSTRAINT
    str2 = "id=1";
    valueParam.push(request["id"]);


    sqlBuilder.sql = "UPDATE " + AREA + " SET " + str1 + " WHERE " +str2;
    sqlBuilder.values = valueParam;

    return sqlBuilder;

};

};
*/
//READ BY ID
/* var asql = "SELECT * FROM AREA WHERE ID=35";
 db.each(asql,function (err,row) {
 console.log(row);


 });*/

//READ ALL
/*
*  db.serialize(function() {

 var ssql = "SELECT * FROM AREA";

 db.each(ssql,function (err,row) {
 console.log(row);
 });

 })*/

