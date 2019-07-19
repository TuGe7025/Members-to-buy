module.exports = {
    //使用promise解决异步数据问题，插入数据
    inset (inserData) {
        return new Promise((resolve,reject) => {
            inserData.save(err => {
                if (err) throw err;
                resolve();
            })
        })
    },
    //查询数据
    find (col, whereObj, showObj) {
        return new Promise((resolve, reject) => {
            col.find(whereObj, showObj).exec((err, data) => {
                if (err) throw err;
                resolve(data);
            })
        })
    },
    //删除数据
    delete (col, deleteData, type) {
        type = type || 'deleteOne';
        return new Promise((resolve, reject) => {
            col[type]( deleteData, err => {
                if (err) throw err;
                resolve();
            })
        })
    },
    //修改数据
    update (col, whereObj, updateObj, type) {
        type = type || 'updateOne';
        return new Promise((resolve, reject) => {
            col[type]( whereObj, updateObj, err => {
                if (err) throw err;
                resolve();
            })
        })
    },
    //排序查询
    sort (col, whereObj, showObj, sortObj) {
        return new Promise((resolve, reject) => {
            col.find(whereObj, showObj).sort(sortObj).exec((err, data) => {
                if (err) throw err;
                resolve(data);
            })
        })
    }
}