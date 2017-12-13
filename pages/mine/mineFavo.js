// pages/mine/mineFavo.js
// var API = "https://aaafs.top";
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
    this.mycollectiontype();
  },

  mycollectiontype: function () {
    let that = this;
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    wx.request({
      url: API + '/app_mycollectiontype',
      data: {
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res);
        if (res.data.ok == 0) {
          wx.showToast({
            title: res.data.message,
            duration: 1500,
            mask: true,
          })
          wx.redirectTo({
            url: '../login/login',
          })
        } 
        that.setData({
          myfavo: res.data.type,
          hidden: true,
        })

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  readDetail: function (e) {
    console.log(e.currentTarget.dataset);
    let id = e.currentTarget.dataset.idx;
    let name = e.currentTarget.dataset.name;
    console.log(name);
    wx.navigateTo({
      url: 'mineFavoDetail?idt=' + id + '&name=' + name,
      success: function (res) { },
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