Page({
  data:{
    address:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that=this;
    that.getAddress();
    wx.chooseAddress({
      success: function(res){
          that.setData({
                address:res
          });
        console.log(res);

      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  getAddress:function(){
    wx.chooseAddress({
      success: function(res){
        console.log(res);
      },
    
    })
  },
  
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})