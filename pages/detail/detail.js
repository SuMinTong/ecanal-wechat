// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.getDetail(options.id);
  
  },

  getDetail:function(e){
    // console.log('传递的参数',e);
    var that = this;
    wx.request({
      url: API + 'app_getweixinnewsbyid?id='+e,
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function(res) {
        that.setData({
          hidden: true,
        })
        WxParse.wxParse('article', 'html', res.data.content, that);
        console.log(res);
      },
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