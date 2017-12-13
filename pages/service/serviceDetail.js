// pages/service/serviceDetail.js
var WxParse = require('../../wxParse/wxParse.js');
// var API = "http://118.89.201.202/e_canal/";
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let idx = options.id;
    this.getServiceDetail(idx);
  
  },

  getServiceDetail:function(idx){
    var that = this;
    wx.request({
      url: API + 'app_getweixinnewsbyid',
      data: {
        'id': idx
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        WxParse.wxParse('detail', 'html', res.data.content, that);
        that.setData({
          loading:true
        })

      },
      fail: function (res) { },
      complete: function (res) { },
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