var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/getTestServer", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var result = {
    //返回数据与格式
    code: 200,
    msg: "测试成功",
  };
  res.json(result); //响应返回json数据
});

router.post("/logs", function (req, res, next) {
  let body = "";
  req.on("data", function (chunk) {
    body += chunk;
    console.log("chunk:", chunk);
  });
  req.on("end", () => {
    console.log("---------------------body---------------------");
    console.log(body);
    res.end();
  });
  var result = {
    //返回数据与格式
    code: 200,
    msg: "测试成功",
  };
  res.json(result); //响应返回json数据
});

module.exports = router;
