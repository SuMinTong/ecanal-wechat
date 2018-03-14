// pages/mine/mineFavoDetail.js
// var API = "https://aaafs.top";
var API = getApp().data.servsers;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,
    new1: false,
    rusume: false,
    goods: false,
    ship: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.data.idt = options.idt;
    console.log('资讯', options);
    if (options.name == "资讯") {
      this.setData({
        new1: true
      })
      console.log('资讯');
    } else if (options.name == "船员") {
      this.setData({
        rusume: true
      })
      console.log('船员');
    } else if (options.name == "货源") {
      this.setData({
        goods: true
      })
      console.log('货源');
    } else if (options.name == "船源") {
      this.setData({
        ship: true
      })
      console.log('船源');
    }
    this.getFavoDetail();

  },

  getFavoDetail: function () {
    let that = this;
    console.log(that.data.idt);
    let id = that.data.idt;
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    wx.request({
      url: API + '/app_mycollection',
      data: {
        'usercontent': usercontent,
        'uuid': open_id,
        'type_id': id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        
        // if (res.data.data.length > 0){
        //   for (var i = 0; i < res.data.data.length; i++) {
        //     res.data.data[i].area = res.data.data[i].area.replace(/\s/g, '/')
        //   }
        // }
        
        that.setData({
          newInfo: res.data.data,
          hidden:true,
        })
        console.log(res.data);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  redictNews: function (e) {
    console.log(e.currentTarget.dataset.ids);
    let id = e.currentTarget.dataset.ids;
    wx.navigateTo({
      url: '../news/news?id=' + id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
replace:function(str){
  console.log(123,str.replace(/\s/g, '-'))
  console.log("132546461325154546");
  return str.replace(/\s/g,'-')
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