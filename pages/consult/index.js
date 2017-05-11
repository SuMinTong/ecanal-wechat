

Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    navTab: ["头条", "社会", "国内", "国际", "财经", "娱乐"],
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
  },
  switchTab: function (e) {
    var that = this;
    var type;
    that.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
    wx.showLoading({
      title: '加载中',
    })
    // console.log(e.currentTarget.dataset.idx);
    switch (e.currentTarget.dataset.idx) {
      case 0: type = "top"
        break;
      case 1: type = "shehui"
        break;
      case 2: type = "guonei"
        break;
      case 3: type = "guoji"
        break;
      case 4: type = "caijing"
        break;
      case 5: type = "yule"
        break;
      default: type = "top"
        break
    }
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=' + type + '&key=9f67b205add0ffa549c84f7e640340c2',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        that.setData({
          newInfo: res.data.result.data,

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },

  onShow: function () {
    var that = this;
    that.getList();

  },
  // 下拉刷新
  upper: function () {
    // wx.showLoading({
    //   title: '加载中',
    // });
    this.getList();
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
    console.log("下拉刷新");
  },

  scroll: function (event) {
    // console.log("滚动了",event);
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  // 上拉加载
  refresh: function () {
    console.log("下拉了");
  },

  getNavTab: function (code) {
    var self = this;
    wx.request({
      url: 'http://www.eyunhe.com.cn/index.php/home/articles/getCat?CatId=1',
      data: {},
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        // console.log(res.data);
        this.cid = res.data[0].cid
        self.setData({
          "cates": res.data,
          "cid": res.data
        });
      },
    })

  },

  getList: function () {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=&key=9f67b205add0ffa549c84f7e640340c2',
      data: {

      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        var data = res.data.result;
        console.log(data);
        if (data.stat == 1) {
          that.setData({
            newInfo: data.data,
            hidden: true,
          })
        }
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  // 跳转到详情界面
  redictNews: function (e) {
    var id = e.currentTarget.id;
    var num = id.replace(/[^0-9]/ig, "");
    wx.navigateTo({
      url: '../news/index?id=' + num,
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
    console.log(num);

  }
})