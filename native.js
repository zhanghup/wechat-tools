

const native = [
  'login',
  'getSetting',
  'getUserInfo'
]

let nv = {}

function format(key){
  return function (param) {
    return new Promise(function (resolve, reject) {
      wx[key]({
        ...param,
        success:function(res){
          resolve(res)
        },
        fail:function(res){
          reject(res)
        }
      })
    })
  }
}

for (let i = 0; i < native.length; i++){
  wx['$' + native[i]] = nv[native[i]] = format(native[i])
}

wx.$showToast = function(str){
  setTimeout(function(){
    wx.showToast({
      title: str,
      icon: 'none',
      duration: 1000
    })
  })
}