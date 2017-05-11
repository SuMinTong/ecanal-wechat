
var page = 0;
var page_size = 20;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;

Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    navTab: ["科技", "体育", "军事", "时尚"],
    currentNavtab: "0",
    newInfo: [],
    "nav_scroll_left": 0,
    load: true,
    hidden: false,
    type1:"junshi"
  },

  switchTab: function (e) {
    var that = this;
    var type1;
    that.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
    wx.showLoading({
      title: '加载中',
    })
    console.log(e.currentTarget.dataset.idx);
    switch (e.currentTarget.dataset.idx) {
      case 0: type1 = "keji"
        break;
      case 1: type1 = "tiyu"
        break;
      case 2: type1 = "junshi"
        break;
      case 3: type1 = "shishang"
        break;
      default: type1 ="keji"
        break;
    }
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=' + type1 + '&key=9f67b205add0ffa549c84f7e640340c2',
      data: {
        
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        that.setData({
          newInfo: res.data.result.data
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


    // var that = this;
    // that.setData({
    //   currentNavtab: e.currentTarget.dataset.idx
    // })
  },

  onShow: function () {
    var that = this;
    that.getList();

  },

  bindDownLoad: function () {
    console.log("下拉刷新");
    var that = this;
    that.getList();
  },

  scroll: function (event) {
    console.log(event);
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },

  refresh: function () {
    console.log("shuaixbi");
    var that = this;
    page = 0;
    that.setData({
      list: [],
      scrollTop: 0
    });
    that.getList();
  },

  getNavTab: function (code) {
    var self = this;
    wx.request({
      url: 'http://www.eyunhe.com.cn/index.php/home/articles/getCat?CatId=1',
      data: {},
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data);
        this.cid = res.data[0].cid
        self.setData({
          "cates": res.data,
          "cid": res.data
        });
      },
    })

  },

  // getList:function(code){
  //   var that=this;
  //   wx.request({
  //     url: 'http://www.eyunhe.com.cn/index.php/home/articles/getInfo?cid='+code,
  //     data: {},
  //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //     // header: {}, // 设置请求的 header
  //     success: function(res){
  //       var data=res.data;
  //       console.log(data);
  //       that.setData({
  //           newInfo:data,
  //           hidden: true,
  //       });
  //     },
  //   })
  // },

  getList: function () {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=&key=9f67b205add0ffa549c84f7e640340c2',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        var data = res.data.result;
        console.log(data.data);
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
   redictNews:function(e){
    var id = e.currentTarget.id;
    var num= id.replace(/[^0-9]/ig,"");
    wx.navigateTo({
      url: '../news/index?id='+num,
      success: function(res){
        console.log("跳转成功",res);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    console.log(num);
   
  }
})