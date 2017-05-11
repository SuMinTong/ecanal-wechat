// pages/mine/index.js
Page({
  data:{
    "path": "pages/index?query=1", "width": 430
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.getUserInfo();
    this.getCode();
  },
    
  getUserInfo:function(){
    var that=this;
    wx.getUserInfo({
      success: function(res){
        that.setData({
          userInfo:res.userInfo
        });
      },
    })
  },
  getCode:function(){
    var that=this;
    wx.request({
      // url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=b3JAPqlSBHVQY7bSFM7J93xyCgU9_OLuqFKikOJcvYBnt3fzEuGheHgwK4x9PxqQnhLzD-qXZj6kKFmcGMz7VbAnzVdmxemFV-MGnXefyQ4VNBdAFAOGU',
     url : 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=b3JAPqlSBHVQY7bSFM7J93xyCgU9_OLuqFKikOJcvYBnt3fzEuGheHgwK4x9PxqQnhLzD-qXZj6kKFmcGMz7VbAnzVdmxemFV-MGnXefyQ4VNBdAFAOGU',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        that.setData({
          code:res.data
        });
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})