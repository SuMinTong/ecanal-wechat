// // // pages/news/index.js
var WxParse = require('../../wxParse/wxParse.js');
var URL = "https://mini.eastday.com/mobile";
Page({
  data: {

  },
  onLoad: function (options) {

    // 生命周期函数--监听页面加载
    this.getArticle(options.id);
    // console.log(options.id);
  },
  wxParseImgTap: function (e) {
    var that = this
    WxParse.wxParseImgTap(e, that)
  },
  getArticle: function (id) {
    var that = this;
    wx.request({
      url: 'https://mini.eastday.com/mobile/' + id + '.html',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        WxParse.wxParse('article', 'html', res.data, that);

        // success
        console.log(res);
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },

  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})

