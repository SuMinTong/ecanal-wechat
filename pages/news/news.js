// pages/news/news.js

var WxParse = require('../../wxParse/wxParse.js');
// var API = "https://aaafs.top";
var API = getApp().data.servsers;
var open_id = wx.getStorageSync('open_id');
var usercontent = wx.getStorageSync('usercontent');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    share: true,
    favo: false,
    comment: false,
    like: false,
    flag: true,
    hidden: true,
    islike: false,
    num: 0,
    loading: false,
    scroll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle(options.id);
    this.data.articleId = options.id;
    this.getComment(options.id);
  },
  // 获得文章详情
  getArticle: function (id) {
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    var that = this;
    wx.request({
      url: API + '/app_weixingetnewsbyid',
      data: {
        'id': id,
        'usercontent': usercontent,
        'uuid': open_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res);
        if (res.data.collection == 1) {
          that.setData({
            favo: true,
          })
        }
        that.setData({
          title: res.data.title,
          like: res.data.likes,
          islike: res.data.islike,
          commentNum: res.data.comment,
          loading: true
        })
        that.data.commentNum = res.data.comment
        WxParse.wxParse('article', 'html', res.data.content, that);
      },
    })
  },
  // 评论点赞
  commentLike: function (e) {
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    console.log(this.data.articleId);
    let idc = this.data.articleId;
    let that = this;
    console.log(e.currentTarget.dataset.idt);
    let id = e.currentTarget.dataset.idt
    wx.request({
      url: API + '/app_commentlikes',
      data: {
        'comment_id': id,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        that.getComment(idc);
        if (res.data != -1) {
          wx.showToast({
            title: '点赞成功',
            duration: 1500,
            mask: true,
            success: function (res) {

            },
          })

        }
      },
    })
  },


  // 评论回复点击事件，
  replyComment: function (e) {
    // console.log(e.currentTarget.dataset.idt);
    this.data.Idt = e.currentTarget.dataset.idt
    // this.setData({ hidden: false })
    wx.navigateTo({
      url: 'replyComment?id=' + e.currentTarget.dataset.idt,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },


  // 点赞
  laud: function () {
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    let that = this;
    let id = this.data.articleId
    wx.request({
      url: API + '/app_newslikes',
      data: {
        'news_id': id,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res)
        if (res.data == -1) {
          wx.showToast({
            title: '您已经点过赞了',
            icon: 'info',
            duration: 1000,
            mask: true,
          })
          return;
        } else {
          wx.showToast({
            title: '点赞成功',
            icon: 'success',
            duration: 1000,
            mask: true,
          })
          that.setData({
            islike: true,
            like: res.data
          })
        }

      },
    })
  },
  // 收藏
  favo: function () {
    let that = this;
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    let id = this.data.articleId;
    wx.request({
      url: API + '/app_newscollection',
      data: {
        'news_id': id,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res);
        if (res.data.ok == 0) {
          wx.navigateTo({
            url: '../login/login',
          })
        } else if (res.data.ok == 1) {
          wx.showToast({
            title: res.data.message,
            success: function (res) {
              that.setData({
                favo: true
              })
            },
          })
        } else if (res.data.ok == -1) {
          wx.showToast({
            title: res.data.message,
            success: function (res) {
              that.setData({
                favo: false
              })
            },
          })
        }
      },
    })
  },
  // 获得文章评论详情
  getComment: function (e) {
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    let pages = 1;
    let that = this;
    console.log('评论数', that.data);
    wx.request({
      url: API + '/app_getNewsComment',
      data: {
        'news_id': e,
        'page': pages,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log(res.data);
        that.setData({
          comment_content: res.data
        })
      },
    })
  },
  // 对文章评论
  comment: function (e) {
    var userInfo = wx.getStorageSync('userInfo');
    let id = this.data.articleId;
    console.log(id);
    if (userInfo == "") {
      wx.showToast({
        title: '您还没有登录，请先登录',
        duration: 1500,
        mask: true,
        success: function (res) {
          wx.navigateTo({
            url: '../login/login',
          })
        },
      })
      return;
    }
    wx.navigateTo({
      url: 'comment?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    // this.setData({ 
    //   flag: false,
    //   scroll:true })
  },
  cancel: function () {
    this.setData({ flag: true })
  },

  // 评论详情页面
  readDetails: function (e) {
    console.log(e.currentTarget.dataset.idx);
    let id = e.currentTarget.dataset.idx;
    wx.navigateTo({
      url: 'details?idx=' + id,
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
    let id = this.data.articleId
    this.getComment(id);

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

