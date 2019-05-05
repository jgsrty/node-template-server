var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/getTestServer", function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var result = {
    //返回数据与格式
    code: 200,
    msg: "测试成功"
  };
  res.json(result); //响应返回json数据
});

module.exports = router;
