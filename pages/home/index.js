var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
// 实例化API核心类
var demo = new QQMapWX({
  key: 'BQTBZ-DIZA4-EGXUU-DON5W-3DUZ7-YYBDE' // 必填
});
Page({
  data: {
    city: "",
    imgUrls: [
      "http://4554585.s21i-4.faiusr.com/2/ABUIABACGAAg1fCKyAUogNn76gEwuBc40A8.jpg",
      "http://4554585.s21i-4.faiusr.com/2/ABUIABACGAAg0vCKyAUorp3iowYwyRw4-RI.jpg",
      "http://4554585.s21i-4.faiusr.com/2/ABUIABACGAAgvtCayAUohvrM7gcw0A84tQo.jpg"

    ],
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
    this.getLocation();
    // this.getCity();
  },

  // getCity: function (latitude, longitude) {
  //   demo.reverseGeocoder({
  //     location: {
  //       latitude: latitude,
  //       longitude: longitude
  //     },
  //     success: function (res) {
  //       // console.log(res.result.ad_info.city);
  //       var city = res.result.ad_info.city
  //       return city
  //     },
  //     fail: function (res) {
  //       // console.log(res);
  //     },
  //     complete: function (res) {
  //       // console.log(res);
  //     }
  //   });

  // },
  switchTab: function () {
    wx.switchTab({
      url: '../consult/index',
      success: function (res) {
        // console.log(res);
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })

  },
  getLocation: function () {
    var self = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // console.log(res);
        // location = res.latitude + ',' + res.longitude;
        var latitude = res.latitude
        var longitude = res.longitude
        // var data = self.getCity(latitude, longitude)
        demo.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            console.log(res.result.ad_info.city);

            var city = res.result.ad_info.city.replace('市', '');//城市名称
            self.searchWeather(city)
            // var city = res.result.ad_info.city
            // return city
          },
          fail: function (res) {
            // console.log(res);
          },
          complete: function (res) {
            // console.log(res);
          }
        });

        
        // console.log(data);
        // self.searchWeather(city);  //查询指定城市的天气信息
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
          fail: function (res) {
            // fail
          },
          complete: function (res) {
            // complete
          }
        })
        // console.log(res)
      }
    })
  },

  searchWeather: function (cityName) {
    var self = this;
    wx.request({
      // url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + cityName + '&output=json&ak=6tYzTvGZSOpYB5Oc2YGGOKt8',
      // url:"https://api.seniverse.com/v3/weather/now.json?key=kqc0ctl6wvtgmq4b&location="+cityName+"&language=zh-Hans&unit=c",
      url: "https://free-api.heweather.com/v5/weather?city=" + cityName + "&key=f49ba36d07f4488592441c4c1d6aad07",
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // var weather = res.data.results[0];  //获取天气数据
        // var weather0 = res.data.results;
        var data = res.data.HeWeather5[0];
        console.log(data);
        // var temperature = weather.weather_data[0].date ;

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
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})