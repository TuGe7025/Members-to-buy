var express = require('express')
var router = express.Router()
const sql = require('../sql/index')
const garage = require('../sql/model/garage')

// 手办页数据
router.get('/', (req, res, next) => {
  sql.find(garage, {},{_id: 0}).then((data) => {
    res.send(data)
  })
})
// 按人气排序
router.get('/sale', (req, res, next) => {
  sql.sort(garage, {},{_id: 0},{"data.like": -1}).then((data) => {
    res.send(data)
  })
})
// 手办页价格从高到低
router.get('/maxprice', (req, res, next) => {
  sql.sort(garage, {}, {_id: 0},{"data.price": -1}).then(data => {
    res.send(data)
  })
})
// 手办页价格从低到高
router.get('/minprice', (req, res, next) => {
  sql.sort(garage, {}, {_id: 0},{"data.price": 1}).then(data => {
    res.send(data)
  })
})
module.exports = router;