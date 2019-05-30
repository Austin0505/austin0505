/**
 * Created by Administrator on 2017/7/17.
 */
const mysql=require("mysql");


const dbPool={
    config:{
        host: "172.16.15.132",
        port: 3306,
        user: "root", //数据库账号
        password: "root", //数据库密码
        database: "jj_project", //s数据库名字
        dateStrings:true,   
        multipleStatements: true 
    },
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config);
        pool.getConnection(function(err,connection){
            if(err){
                console.log(connection)
            }
            connection.query(sql,sqlArr,callBack);
            connection.release();
        })
    }
}
module.exports=dbPool