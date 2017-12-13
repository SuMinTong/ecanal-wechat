// pages/register/register.js
// var API = "https://aaafs.top/";
var API = getApp().data.servsers;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: true,
    count: 60,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },



  // 用户输入的手机号码
  inputPhone: function (e) {
    console.log(e.detail.value);
    this.data.phone = e.detail.value;
    let phone = e.detail.value
  },
  inputUserName:function(e){
    if (e.detail.value.length != 11){
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'warn',
        duration: 0,
        mask: true,
        success: function (res) {
        },
      })
      return;
    }
    console.log(e.detail.value);
  },
  sendMessageCode: function () {
    let that = this;
    console.log(that.data.phone);
    if (that.data.phone == undefined) {
      wx.showToast({
        title: '请输入正确的验证码',
        icon: 'warn',
        duration: 1500,
        mask: true,
        success: function (res) {
          that.setData({
            code: true
          })
        },
      })
      return;
    }
    that.setData({
      code: false
    })
    console.log(this.data.phone);
    wx.request({
      url: API + 'sendMessage',
      data: {
        phone: this.data.phone,
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        that.data.phoneCode = res.data.code;
        console.log(res);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    that.countdown();
  },
  // 60秒倒计时
  countdown: function () {
    let second = 60;
    let that = this;
    let appCount = setInterval(function () {
      second -= 1;
      that.setData({
        count: second
      })
      if (second < 1) {
        clearInterval(appCount);
        that.setData({
          second: 10,
          code: true
        })
      }
    }, 1000);

  },

  // 短信验证码输入
  inputPhoneCode: function (e) {
    console.log(e.detail.value);
    let phoneCode = e.detail.value;
    let code = this.data.phoneCode
    if (phoneCode != code) {
      wx.showToast({
        title: '请输入正确的验证码',
        icon: 'success',
        duration: 0,
        mask: true,
        success: function (res) {
        },
      })
    }
  },
// 注册
  register: function (e) {
    var open_id = wx.getStorageSync('open_id');
    let that = this;
    that.setData({
      member_openid: open_id
    })
    let info = e.detail.value;
    if (info.username == ""){
      wx.showModal({
        title: '用户名不能为空！'
      })
      return
    }
    // wx.setStorageSync('phone', info.member_phone);
    // // 验证用户的手机号码（11位）

    // //  /密码不能为空
    if (info.member_pwd_1 == "" || info.member_pwd_2 == "") {
      wx.showModal({
        title: '密码不能为空！'
      })
      return
    };

    // // 两次密码不相同
    if (info.member_pwd_1 !== info.member_pwd_2) {
      wx.showModal({
        title: '两次密码不同！'
      })
      return
    };
    wx.request({
      url: API + 'app_wechatregisterUser',
      data: {
        'phone': info.member_phone,
        'password': info.member_pwd_1,
        'loginname': info.username,
        'wechat_uuid':open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res);
        wx.showToast({
          title: res.data.message,
        })
        wx.navigateBack({
          delta: 1,
        })
      },
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