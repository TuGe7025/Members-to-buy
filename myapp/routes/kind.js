var express = require('express')
var router = express.Router()
const sql = require('../sql/index')
const Kind = require('../sql/model/kinds')

// 分类查询页
router.get('/', (req, res, next) => {
  sql.find(Kind, {},{_id: 0}).then((data) => {
    res.send(data)
  })
})
module.exports = router;