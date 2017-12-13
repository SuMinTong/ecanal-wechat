
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedTitle: "0", 
    loading:false
  },
  // 定义点击标题的事件处理函数，将选中标题的id赋值给selectedTitle
  tapmenu: function (e) {
    let idt = e.currentTarget.dataset.idt;
    this.data.idt = e.currentTarget.dataset.idt;
    this.setData({
      selectedTitle: e.currentTarget.id
    });
    this.getList(idt);
  },
  //定义滑块改变的事件处理函数，将current赋值给selectedTitle
  bindChange: function (e) {
    let id = e.detail.current;
    let idt = this.data.titles[id].id;
    this.setData({
      selectedTitle: e.detail.current
    })
    this.getList(idt);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getservicetitle();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          swiperHeight: (res.windowHeight - 153)
        });
      }
    })
  },

  getservicetitle: function () {
    let that = this;
    wx.request({
      url: API + 'app_getservicetitle',
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log('132546',res);
        that.setData({
          titles: res.data
        })
        that.getList(res.data[0].id);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  getList: function (idt) {
    let that = this;
    wx.request({
      url: API + 'app_getweixinnewsbytypeid',
      data: {
        'typeid': idt
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        that.setData({
          serverList: res.data,
          loading:true
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  serviceFull: function (e) {
    let that = this;
    let idx = e.currentTarget.dataset.idx;

    wx.navigateTo({
      url: 'serviceDetail?id=' + idx,
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