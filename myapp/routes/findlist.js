var express = require('express')
var router = express.Router()
const sql = require('../sql/index')
const Feelist = require('../sql/model/feelist')

// 查询首页数据
router.get('/datalist', (req, res, next) => {
  sql.find(Feelist, {},{_id: 0}).then((data) => {
    res.send(data)
  })
})
// 查询列表
router.get('/findlist', (req, res, next) => {
  const { pageNum } = req.query
  var Num = pageNum * 1 || 1
  console.log(Num)
  sql.find(Feelist, {"data.vo.feeds.pageNum": Num },{_id: 0,"data.vo.feeds.list": 1}).then((data) => {
    res.send(data)
  })
})
module.exports = router;