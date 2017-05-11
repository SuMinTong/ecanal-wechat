// // pages/news/index.js
var WxParse = require('../../wxParse/wxParse.js');
var API_URL = "http://www.eyunhe.com.cn/index.php/Home/Articles/getArticle?id=";
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },
  onLoad: function (options) {
    var that = this;
    // console.log(options);
    wx.request({
      url: 'http://www.eyunhe.com.cn/index.php/Home/product/readInfo?id=' + options.id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data);
        // success
        //  WxParse.wxParse('article', 'html', res.data, that, 5);    
        // 将时间戳转换为时间
        var time = new Date(parseInt(res.data.published) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
        that.setData({
          image: res.data.image,
          content: res.data,
          time: time,
          comment: res.data.comment
        });
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    }),
      wx.request({
        url: 'http://www.eyunhe.com.cn/index.php/Home/product/readImage?id=' + options.id,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log("图片详情",res.data.img);
          that.setData({
            img: res.data.img
          })

          // var data = that.imgSrc(res.data);
          // console.log(data);
          //  WxParse.wxParse('content', 'html', res.data, that, 5);    
        },
        fail: function (res) {
          // fail
        },
        complete: function (res) {
          // complete
        }
      })
  },

  // imgSrc: function (str) {
  //   var imgReg = /<img.*?(?:>|\/>)/gi;
  //   //匹配src属性
  //   var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/ig;
  //   var arr = str.match(imgReg);
  //   console.log('所有已成功匹配图片的数组：' + arr);
  //   for (var i = 0; i < arr.length; i++) {
  //     var src = arr[i].match(srcReg);
  //   //    console.log('已匹配的图片地址' + src);
  //   //   //当然你也可以替换src属性
  //   //   // if (src[0]) {
  //       var t = src[0].replace(/src="/ig, "src='http://www.eyunhe.com.cn");
        
  //   //     return str.replace(src[0],t);
  //   //   // }
  //   //   // return 
  //   }
  //   console.log(str.replace(src[0],t));
  // }

})

