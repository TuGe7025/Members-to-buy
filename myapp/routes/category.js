var express = require('express')
var router = express.Router()
const sql = require('../sql/index')
const category = require('../sql/model/category')

// 查询手办综合列表
router.get('/', (req, res, next) => {
  const { pageIndex } = req.query
  var Num = pageIndex * 1 || 1
  console.log(Num)
  sql.find(category, {"data.pageIndex": Num },{_id: 0,"data.list": 1}).then((data) => {
    res.send(data)
  })
})
router.get('/sale', (req, res, next) => {
  const { pageIndex } = req.query
  var Num = pageIndex * 1 || 1
  sql.sort(category, {},{_id: 0,"data.list.price": 1},{"data.list.price": 1}).then((data) => {
    res.send(data)
  })
})
module.exports = router;