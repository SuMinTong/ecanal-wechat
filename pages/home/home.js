var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
// 实例化API核心类
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
// console.log("15546546546",test)  
var demo = new QQMapWX({
  key: 'BQTBZ-DIZA4-EGXUU-DON5W-3DUZ7-YYBDE' // 必填
});
Page({
  data: {
    city: "",
    index: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentPage: 1,
    latitude: "",
    longitude: ""
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    
    this.searchWeather();
    
    this.getHomeList();
    this.getNewNews();
  },

  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    this.getBanner();
    this.searchWeather();
    
  },

  getHomeList: function () {
    let that = this;
    wx.request({
      url: API + 'e_canal/app_getaboutusandsumary',
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        let list = res.data;
        that.setData({
          list: list
        })
      },
    })
  },
  getNewNews: function () {
    let that = this;
    wx.request({
      url: API + 'e_canal/app_getnewweixinnews',
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        that.setData({
          newNews: res.data
        })
      },
    })
  },
  newNews: function (e) {
    let idm = e.currentTarget.dataset.idm
    wx.navigateTo({
      url: '../news/news?id=' + idm,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 轮播图
  getBanner: function () {
    
    let that = this;
    wx.request({
      url: API + 'e_canal/app_getcarousel',
      data: '',
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {

        let imgUrls = res.data;
        wx.setStorageSync('imgUrls', imgUrls)
        that.setData({
          imgUrls: imgUrls,
        })

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  getLocation: function () {
    
    var self = this;
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function(res) {
    //     console.log('获取地理位置成功', res);
    //   },
    //   fail: function (res) { console.log( res);},
    //   complete: function (res) { console.log(res);},
    // })






    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        
        var latitude = res.latitude
        var longitude = res.longitude
        // var data = self.getCity(latitude, longitude)
        demo.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            var city = res.result.ad_info.city.replace('市', '');//城市名称
            console.log("城市名称",city);
            wx.setStorageSync("city", city);
            let c = wx.getStorageSync("city");
            console.log(c);
            self.searchWeather();
          },
        });
      },
    })
  },



  scanCode: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        wx.setClipboardData({
          data: res.result,
          success: function (res) {
            wx.navigateTo({
              url: 'scanCode',
              success: function (res) {
                // success

              },
            })
          },
        })
      }
    })
  },

  searchWeather: function () {
    let cityName = wx.getStorageSync("city");
    if (cityName == "") {
      this.getLocation();
    }
    var self = this;
    wx.request({
      url: "https://free-api.heweather.com/v5/weather?city=" + cityName + "&key=f49ba36d07f4488592441c4c1d6aad07",
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        var data = res.data.HeWeather5[0];
        self.setData({
          hidden: true,
          city: cityName,      //更新显示城市名称
          weather: data,    //更新天气信息
          inputCity: '',    //清空查询输入框
        })
      }
    })
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '分享', // 分享标题
      desc: '分享', // 分享描述
      path: 'path' // 分享路径
    }
  },
  aboutUs: function (e) {
    let id = e.currentTarget.dataset.idt
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})

function strToHexCharCode(str) {
  if (str === "")
    return "";
  var hexCharCode = [];
  hexCharCode.push("0x");
  for (var i = 0; i < str.length; i++) {
    hexCharCode.push((str.charCodeAt(i)).toString(16));
  }
  return hexCharCode.join("");
}