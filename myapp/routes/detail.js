var express = require('express')
var router = express.Router()
const sql = require('../sql/index')
const details = require('../sql/model/details')

// 匹配详情页数据
router.get('/items', (req, res, next) => {
  const { itemsId } = req.query
  var id = itemsId * 1
  sql.find(details, {"data.itemsId": id},{_id: 0}).then(data => {
    res.send(data[0].data)
    // for (var i=0; i < data[0].data.vo.feeds.list.length; i++) {
    //   if(data[0].data.vo.feeds.list[i].itemsId === id) {
    //     res.send(data[0].data.vo.feeds.list[i])
    //   }
    // }
  })
})
module.exports = router;