
module.exports = function (url,param, header = {'content-type': 'application/json'}){

  return new Promise(function(resolve,reject){
    wx.request({
      url, 
      method:'post',
      data: param,
      header: header,
      success(res) {
        resolve(res)
      },
      fail(e){
        reject(e)
      }
    })
  })
}