Page({
  data:{
    latitude:"",
    longitude:"",
    width:"",
    height:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.getLocation();
    this.getSystemInfo();
  },
   getLocation:function(){
    var self = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log(res);
        location = res.latitude + ',' + res.longitude;
        self.setData({
          latitude:res.latitude,
          longitude:res.longitude
        });
      },
    })
  },
  getSystemInfo:function(){
    wx.getSystemInfo({
      success:function(res){
        width:res.screenWidth;
        height:res.screenHeight
      }
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