var express = require('express')
var router = express.Router()
const sql = require('../sql/index')
const news = require('../sql/model/news')

// 新品查询页
router.get('/', (req, res, next) => {
  sql.find(news, {},{_id: 0}).then((data) => {
    res.send(data)
  })
})
module.exports = router;