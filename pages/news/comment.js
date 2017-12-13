// pages/news/comment.js
// var API = "https://aaafs.top";
var API = getApp().data.servsers;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options);
  this.data.idx = options.id
  this.getComment();
  },

  // 提交评论
  submitComment: function (e) {
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    this.setData({ flag: true })
    let id = this.data.idx;
    let that = this;
    let commentNUM = that.data.commentNum;
    let content = e.detail.value.commentContent;
    if (content == "") {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'warm',
        duration: 1500,
        mask: true,
      })
      return;
    }
    wx.request({
      url: API + '/app_commentnews',
      data: {
        'news_id': id,
        'content': content,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        wx.navigateBack({
          delta: 1,
        })
        wx.showToast({
          title: '评论成功，正在返回上一级页面',
          duration: 1500,
          mask: true,
        })
        console.log(that.data);
        // that.getComment(id);
        console.log(res);
        if (res.data.iuser == 1) {
       
          that.setData({
            comment: true,
            commentNum: commentNUM + 1
          })

        }
      },
    })
  },

  getComment: function () {
    let id = this.data.idx;
    var open_id = wx.getStorageSync('open_id');
    var usercontent = wx.getStorageSync('usercontent');
    let pages = 1;
    let that = this;
    console.log('评论数', that.data);
    wx.request({
      url: API + '/app_getNewsComment',
      data: {
        'news_id': id,
        'page': pages,
        'usercontent': usercontent,
        'uuid': open_id
      },
      header: {},
      method: 'GET',
      dataType: '',
      success: function (res) {
        console.log("143456456",res.data);
        that.setData({
          comment_content: res.data
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