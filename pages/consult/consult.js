var page = 0;
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
// var api = require('../../utils/util.js');
// let api1 = api.api;
// console.log(api1); 
// var API = api.api;
Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    // navTab: ["船闸", "船只", "陆运", "港口", "仓库", "新闻","政策","集装箱"],
    navTab: [],
    currentNavtab: "0",
    newInfo: [],
    "nav_scroll_left": 0,
    load: true,
    hidden: false,
    content: [],
  },

  onLoad: function () {
    //   这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    this.getnavTab();
  },

  scroll: function (event) {
    console.log(event.detail.scrollTop);
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  topLoad: function (event) {
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    page = 0;
    this.setData({
      list: [],
      scrollTop: 0
    });
    this.Refresh();
    console.log("lower");
  },

  getnavTab: function () {
    let that = this;
    wx.request({
      url: API + 'app_getnewstype',
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        let navTab = res.data;
        // 将分类加到缓存里面
        wx.setStorageSync('navTab', navTab)
        that.setData({
          navTab: navTab
        })
        let idx = res.data[0].id;
        console.log("123+++", idx);
        that.getDefaultList(idx);
      },
    })
  },
  getDefaultList: function (e) {
    var that = this;
    console.log(e);
    that.data.typeid = e;
    wx.request({
      url: API + 'app_getnewsbytype',
      data: {
        'typeid': e,
        'page': 1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res);
        that.setData({
          newInfo: res.data,
          hidden: true,
        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);
        that.data.oldid = res.data[0].id;
      },
    })
  },
  switchTab: function (e) {
    var that = this;
    console.log(e);
    const idx = e.currentTarget.dataset.idx;
    // var typeid;
    that.setData({
      currentNavtab: idx
    });
    wx.showLoading({
      title: '加载中',
    })
    let id = e.target.dataset.idx;
    console.log(id);
    that.data.typeid = id;
    that.getDefaultList(id);
  },
  onShow: function () {
  },

  onReady: function () {
    let duration = this.data.duration = 10000;
    this.animation = wx.createAnimation({
      duration: duration,
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res)
      }
    })
  },

  Refresh: function () {
    // for(let i=0;;i++){
      // this.animation.rotate(i).step();
      // this.data.i = i;
      // this.setData({
      //   animation: this.animation.export()
      // })
    // }
    let that = this;
    let oldid = this.data.oldid;
    let typeid = this.data.typeid;
    that.getDefaultList(typeid);
    wx.showLoading({
      title: '正在加载，请稍后',
      mask: true,
      success: function (res) {
        wx.request({
          url: API + 'app_getnewnews',
          data: {
            'oldid': oldid,
            'typeid': typeid
          },
          header: {},
          method: 'GET',
          dataType: '',
          success: function (res) {
            that.setData({
              newInfo: res.data,
            });
            wx.hideLoading();
          },
          fail: function (res) { },
          complete: function (res) {
            wx.hideLoading();

          },
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  // 跳转到详情界面
  redictNews: function (e) {
    console.log(e.currentTarget.dataset.ids);
    var id = e.currentTarget.dataset.ids;
    wx.navigateTo({
      url: '../news/news?id=' + id,
      success: function (res) {
        console.log("跳转成功", res);
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
    // console.log(num);
  },

  onPullDownRefresh: function () {
    console.log('----------+++下拉+++----------');
  },
})