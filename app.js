// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  getExpressInfo:function(nu,cb){
    //console.log("全局函数");
    wx.request({
      url: 'https://hcapi03.api.bdymkt.com/express/trace/query?number='+nu,
      method:"GET",
      header:{
        "Content-Type": "application/json;charset=UTF-8",
        "X-Bce-Signature": "AppCode/e8aaaca268ae462c8915c3d85e8825c5",
      },
    
      success:function(res) {
        //console.log(res.data)
        cb(res.data);
      }
    })
  }
})
