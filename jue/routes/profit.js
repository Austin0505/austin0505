var express = require('express');
var router = express.Router();
const sqlUtil = require('./../DAO/sqlDB.js')
/* GET home page. */
router.get('/show', function (req, res, next) {

  let sqlStr = 'select * from profit'
    sqlUtil.sqlConnect(sqlStr,[],function(err,data){
      console.log(data)
      res.send(data)
      // if(err){
      //   console.log(err)
      // }else{
      //   if(data.length>0){
      //     res.send('查询成功')
      //   }else{
      //     res.send('查询失败，没有你要的数据')
      //   }
      // }
    //   res.render('/profit',{
    //     data:data
    //   })
    })
});

module.exports = router;


