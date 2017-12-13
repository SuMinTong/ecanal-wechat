// pages/login/login.js
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
var md5 = require('../../utils/md5.js'); // 导入MD5加密工具

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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log('heihgt: ' + res.windowHeight)
        that.setData({
          Height: (res.windowHeight)
        });
      }
    })
  },

  login: function (e) {
    let open_id = wx.getStorageSync('open_id');
    let userInfo = e.detail.value;
    let content = e.detail.value.content;
    let password = md5.hexMD5(e.detail.value.password);
    // password = md5.binl2b64('test');
    wx.setStorageSync('usercontent', content);
    wx.request({
      url: API + 'app_weixinuserlogin',
      data: {
        'content': content,
        'password': password,
        'wechatuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res);
        if(res.data.ok == 0){
          wx.showToast({
            title: res.data.message,
            icon: 'warm',
            image: '',
            duration: 0,
          })
          return;
        }
        wx.setStorageSync('userInfo', res.data)
        wx.showToast({
          title: '登录成功，正在返回上一个页面！',
          icon: 'waiting',
          image: '',
          duration: 1500,
          mask: true,
          success: function(res) {
            wx.navigateBack({
              delta: 1,
            })
          },
        })
       
        wx.setStorageSync('open_id', res.data.message);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  register:function(){
    wx.navigateTo({
      url: '../register/register',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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