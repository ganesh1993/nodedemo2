/**
 * Created by lenovo on 17/02/2017.
 */
/**
 * Created by lenovo on 16/02/2017.
 */
var dbManager = require('./db/Dbmanager');
var db = dbManager.db;

db.serialize(function () {

    var request = {"AREA" : "Ganesh","AREA_ID" : 11};
    var isb = insertSqlBuilder("AREA",request);

    db.run(isb.sql,isb.values);


});

function insertSqlBuilder(AREA,request) {

    var sqlBuilder = {};
    var str1 = "("
    var str2 = "("

    var valueParam = [];

    for(var prop in request){
        if(prop !='id'){
            str1 += prop + ",";
            str2 +="?,";

            valueParam.push(request[prop]);

        }
    }

    str1 = str1.replace(/.$/,")");
    str2 = str2.replace(/.$/,")");

    sqlBuilder.sql = "INSERT INTO  " + AREA + " " + str1 + " VALUES " + str2;
    sqlBuilder.values = valueParam;

    return sqlBuilder;


};



db.close();
