// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getUserInfo();
    this.getStorage();

  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '15253165511',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  // 计算本地缓存
  getStorage: function () {
    let that = this;
    wx.getStorageInfo({
      success: function (res) {
        console.log(res);
        that.setData({
          Storage: res.currentSize
        })

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  getUserInfo: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        });
        wx.setStorageSync('wechatUserInfo', res.userInfo);
      },
    })
  },
// 跳到意见反馈详情页面
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
// 清除缓存
  setting: function () {
    let that = this;
    wx.clearStorage();
    that.setData({
      Storage: 0
    })
  },
// 跳到我的收藏页面
  myFavo:function(){
    wx.navigateTo({
      url: 'mineFavo',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})